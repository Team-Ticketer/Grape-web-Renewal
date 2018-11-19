pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;

contract Grape {
    uint256 concertCount = 0;
    uint256 ticketBuyerListCount = 0;
    
    modifier isOwner(address user) {
        require(msg.sender == user, "Authorization Failed");
        _;
    }

    modifier isAuction(uint256 _ticketId, uint256 _concertId) {
        Concert checkConcert = concertList[_concertId];
        require(checkConcert.isTransferable[checkConcert.ticketList[_ticketId].ticketType] == true, "Not Auction");
        _;
    }

    modifier checkStartSaleTime (uint256 _saleStartTime) {
        require(_saleStartTime >= block.timestamp && _saleStartTime != 0);
        _;
    }

    modifier checkEndSaleTime (uint256 _saleEndTime) {
        require(_saleEndTime > block.timestamp == true);
        _;
    }    

    modifier canOnlySaleWithinSaleTime (uint256 _saleStartTime, uint256 _saleEndTime) {
        require(_saleStartTime >= block.timestamp && _saleStartTime != 0);
        require(_saleEndTime > block.timestamp == true);
        _;
    }

    struct Concert {
        uint256 concertId;
        address creator;
        uint256 saleStartTime;
        uint256 saleEndTime;
        uint256 ticketTypeCounts;
        string[] ticketName;
        uint256[] ticketPrice;
        uint256[] ticketAmount;
        bool[] isTransferable;
        uint256 ticketListCount;
        mapping (uint256 => Ticket) ticketList;
        /*
            concertId - 콘서트 고유 아이디
            creator - 개최자
            saleStartTime - 판매 시작시간, 0이면 바로 시작
            saleEndTime - 판매 종료시간, 이벤트의 맨 마지막 날로 자동 설정
            ticketTypeCounts - 티켓 타입이 몇개나 있는지
            ticketName - (배열) 티켓 타입의 이름
            ticketPrice - (배열) 티켓 타입의 가격
            ticketAmount - (배열) 티켓 타입에 따른 티켓의 갯수
            isTransferable - (배열) 티켓 타입에 따른 양도 가능 유무
            ticketListCount - 이 콘서트에 지금 발급된 티켓의 갯수
            ticketList - (Ticket 배열) 이 콘서트에 지금 발급된 티켓 리스트
        */
    }
    
    mapping (uint256 => Concert) concertList;
    // Concert를 리스트로 매핑
    // 이러면 concertId 없어져도 되지 않나..?
    // 보고 수정해줘 종현아

    struct Ticket {
        uint256 concertId;
        address owner;
        uint256 ticketType;
        uint256 date;
        uint256 price;
        bool isTransfer;
        uint256 ticketHistoryCount;
        mapping (uint256 => AuctionHistory) transferHistorys;
        /*
            concertId - 콘서트 고유 아이디
            owner - 티켓 주인
            ticketType - 티켓 타입, 숫자로 되어있음
            date - 티켓 구매 일시 (양도한 티켓일 경우 양도한 날짜)
            price - 티켓 가격 (양도한 티켓일 경우 양도할 때 산 금액)
            ticketHistoryCount - 양도를 한 횟수
            transferHistorys - (배열) 양도한 이력
            isTransfer - 현재 이 티켓이 양도 신청이 되어있는가?
        */
    }
    
    struct AuctionHistory {
        uint256 date;
        address beforeOwnerAddress;
        address afterOwnerAddress;
        uint256 price;
        /*
            date - 양도한 날짜
            beforeOwnerAddress - 이전 주인의 지갑 주소
            afterOwnerAddress - 양도 후 주인의 지갑수조
            price - 구매 가격
        */
    }

    function createConcert(
        uint256 _saleStartTime,
        uint256 _saleEndTime,
        uint256 _ticketTypeCounts,
        string[] _ticketName,
        uint256[] _ticketPrice,
        uint256[] _ticketAmount,
        bool[] _isTransferable
    ) 
    public payable {
        concertList[concertCount] = (
            Concert(
                concertCount,
                msg.sender,
                _saleStartTime,
                _saleEndTime,
                _ticketTypeCounts,
                _ticketName,
                _ticketPrice,
                _ticketAmount,
                _isTransferable,
                0
            )
        );
        concertCount++;
    }

    function payTicket(
        uint256 _concertId,
        uint256 _ticketType
    ) 
    public payable{
        concertList[_concertId].ticketList[concertList[_concertId].ticketListCount] = Ticket(
            _concertId,
            msg.sender,
            _ticketType,
            block.timestamp,
            concertList[_concertId].ticketPrice[_ticketType],
            false,
            0
        );
        concertList[_concertId].ticketListCount = concertList[_concertId].ticketListCount + 1;
        concertList[_concertId].ticketAmount[_ticketType] = concertList[_concertId].ticketAmount[_ticketType] - 1;
    }

    function viewConcert(uint256 concertId) public view returns (
        address _creater,
        uint256 _ticketTypeCounts,
        uint256 _ticketHighPrice,
        uint256 _ticketLowPrice,
        uint256 _ticketAmount
    ) {
        Concert selectConcert = concertList[concertId];
        uint256 tempHighPrice = selectConcert.ticketPrice[0];
        uint256 tempLowPrice = selectConcert.ticketPrice[0];
        uint256 tempAmount = 0;
        if (selectConcert.ticketTypeCounts != 0) {
            for (uint i = 0; i < selectConcert.ticketTypeCounts; i++) {
                if (tempHighPrice < selectConcert.ticketPrice[i]) {
                    tempHighPrice = selectConcert.ticketPrice[i];
                }
                if (tempLowPrice > selectConcert.ticketPrice[i]) {
                    tempLowPrice = selectConcert.ticketPrice[i];
                }
                tempAmount = tempAmount+selectConcert.ticketAmount[i];
            }
        }
        _creater = selectConcert.creator;
        _ticketTypeCounts = selectConcert.ticketTypeCounts;
        _ticketHighPrice = tempHighPrice;
        _ticketLowPrice = tempLowPrice;
        _ticketAmount = tempAmount;
    }

    function viewConcertTicketType(uint256 concertId, uint256 ticketType) public view returns (
        string _ticketName,
        uint256 _ticketPrice,
        uint256 _ticketAmount,
        bool _isTransferable
    ) {
        Concert selectConcert = concertList[concertId];
        _ticketName = selectConcert.ticketName[ticketType];
        _ticketPrice = selectConcert.ticketPrice[ticketType];
        _ticketAmount = selectConcert.ticketAmount[ticketType];
        _isTransferable = selectConcert.isTransferable[ticketType];
    }

    function viewMyTicket(uint256 concertId) public view returns(
        uint256 _concertId,
        uint256 _ticketId,
        uint256 _date,
        uint256 _price,
        bool _isTransfer,
        uint256 _ticketHistoryCount
    ) {
        Concert selectConcert = concertList[concertId];
        for (var index = 0; index < selectConcert.ticketListCount; index++) {
            if (msg.sender == selectConcert.ticketList[index].owner) {
                _concertId = concertId;
                _ticketId = index--;
                _date = selectConcert.ticketList[index].date;
                _price = selectConcert.ticketList[index].price;
                _isTransfer = selectConcert.ticketList[index].isTransfer;
                _ticketHistoryCount = selectConcert.ticketList[index].ticketHistoryCount;
                break;
            }
        }
    }

    function viewMyTicketHistory(uint256 concertId, uint256 ticketId, uint256 historyIndex)
    public view returns (
        uint256 _date,
        address _beforeOwnerAddress,
        address _afterOwnerAddress,
        string _afterOwnerName,
        uint256 _price
    ) {
        AuctionHistory selectTicketHistory = concertList[concertId].ticketList[ticketId].transferHistorys[historyIndex];
        _date = selectTicketHistory.date;
        _beforeOwnerAddress = selectTicketHistory.beforeOwnerAddress;
        _afterOwnerAddress = selectTicketHistory.afterOwnerAddress;
        _price = selectTicketHistory.price;
    }

    function buyUsedTicket(uint256 _concertId, uint256 _ticketType) public payable
    returns(
        bool _isSearch
    ) {
        bool isSearch = false;
        // 찾았는지 못찾았는지 표시
        for (uint256 i = 0; i < concertList[_concertId].ticketListCount; i++) {
            Ticket selectTicket = concertList[_concertId].ticketList[i];
            if (selectTicket.ticketType == _ticketType && selectTicket.isTransfer) {
                isSearch = true;
                selectTicket.owner.transfer(concertList[_concertId].ticketPrice[_ticketType]);
                concertList[_concertId].creator.transfer(concertList[_concertId].ticketPrice[_ticketType] * 1 / 10);
                selectTicket.isTransfer = false;
                selectTicket.transferHistorys[selectTicket.ticketHistoryCount].date = block.timestamp;
                selectTicket.transferHistorys[selectTicket.ticketHistoryCount].beforeOwnerAddress = selectTicket.owner;
                selectTicket.transferHistorys[selectTicket.ticketHistoryCount].afterOwnerAddress = msg.sender;
                selectTicket.transferHistorys[selectTicket.ticketHistoryCount].price = concertList[_concertId].ticketPrice[_ticketType] * 11 / 10;
                selectTicket.ticketHistoryCount++;
                selectTicket.owner = msg.sender;
                break;
            }
        }
        _isSearch = isSearch;
    }

    function sellUsedTicket(uint256 _concertId, uint256 _ticketType) public payable {
        for (uint256 i = 0; i < concertList[_concertId].ticketListCount; i++) {
            if (concertList[_concertId].ticketList[i].owner == msg.sender && !concertList[_concertId].ticketList[i].isTransfer) {
                concertList[_concertId].creator.transfer(concertList[_concertId].ticketPrice[_ticketType] * 1 / 10);
                concertList[_concertId].ticketList[i].isTransfer = true;
                break;
            }
        }
    }

    function cancleSellUsedTicket(uint256 _concertId, uint256 _ticketType) public payable {
        for (uint256 i = 0; i < concertList[_concertId].ticketListCount; i++) {
            if (concertList[_concertId].ticketList[i].owner == msg.sender && concertList[_concertId].ticketList[i].isTransfer) {
                concertList[_concertId].creator.transfer(concertList[_concertId].ticketPrice[_ticketType] * 1 / 10);
                concertList[_concertId].ticketList[i].isTransfer = false;
                break;
            }
        }
    }
}

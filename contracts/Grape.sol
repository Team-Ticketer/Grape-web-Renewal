pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;

contract Grape {
    uint256 concertCount = 0;
    
    modifier isOwner(address user) {
        require(msg.sender == user, "Authorization Failed");
        _;
    }

    modifier isAuction(uint256 _ticketId, uint256 _concertId) {
        Concert checkConcert = concertList[_concertId];
        require(checkConcert.isTransferable[checkConcert.ticketList[_ticketId].ticketType] == true, "Not Auction");
        _;
    }

    struct Concert {
        uint256 concertId;
        address creator;
        uint256 ticketTypeCounts;
        uint256 saleStartTime;
        uint256 saleEndTime;
        string[] ticketName;
        uint256[] ticketPrice;
        string[] ticketDescription;
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
            ticketDescription - (배열) 티켓 타입에 대한 설명
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
        string beforeOwnerName;
        address afterOwnerAddress;
        string afterOwnerName;
        uint256 price;
        /*
            date - 양도한 날짜
            beforeOwnerAddress - 이전 주인의 지갑 주소
            beforeOwnerName - 이전 주인의 닉네임 (정규화를 해야될까... 싶음)
            afterOwnerAddress - 양도 후 주인의 지갑수조
            afterOwnerName - 양도 후 주인의 닉네임
            price - 구매 가격
        */
    }

    struct TicketBuyer {
        uint256 concertId;
        uint256 ticketType;
        address requester;
        uint256 date;
        /*
            concertId - 콘서트 이름
            ticketType - 콘서트의 티켓 타입
            requester - 양도 대기 요청한 사람
            date - 양도 대기 요청한 일자
        */
    }

    mapping (uint256 => TicketBuyer) ticketBuyerList;

    function createConcert(
        uint256 _ticketTypeCounts,
        uint256 _saleStartTime,
        uint256 _saleEndTime,
        string[] _ticketName,
        uint256[] _ticketPrice,
        string[] _ticketDescription,
        uint256[] _ticketAmount,
        bool[] _isTransferable
    ) 
    public payable {
        address foundation = 0x50e2CeB9B439b7CE7B346BE2Cae87a8B38B98e9B;
        foundation.transfer(20);
        concertList[concertCount] = (
            Concert(
                concertCount,
                msg.sender,
                _ticketTypeCounts,
                _saleStartTime,
                _saleEndTime,
                _ticketName,
                _ticketPrice,
                _ticketDescription,
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
    public payable {
        Concert _selectConcert = concertList[_concertId];
        require(canOnlySaleWithinSaleTime(_selectConcert.saleStartTime, _selectConcert.saleEndTime));
        address _creator = _selectConcert.creator;
        uint256 _price = _selectConcert.ticketPrice[_ticketType];
        _creator.transfer(_price);
        _selectConcert.ticketList[_selectConcert.ticketListCount] = Ticket(
            _concertId,
            msg.sender,
            _ticketType,
            block.timestamp,
            _price,
            false,
            0
        );
    }

    function checkStartSaleTime (uint256 _saleStartTime)
    public view returns (bool _isBeforeSaleTime) {
        if (_saleStartTime != 0) {
            if (_saleStartTime >= block.timestamp) {
                return true;
            }
        } else {
            return true;
        }
        return false;
    }

    function checkEndSaleTime (uint256 _saleEndTime)
    public view returns(bool _isAfterSaleTime) {
        if (_saleEndTime > block.timestamp) {
            return true;
        }
        return false;
    }

    function canOnlySaleWithinSaleTime (uint256 _saleStartTime, uint256 _saleEndTime) public view returns (bool isCorrectRequest) {
        require(checkStartSaleTime(_saleStartTime), "Befoe SaleTime");
        require(checkEndSaleTime(_saleEndTime), "End SaleTime");
        return true;
    }
}
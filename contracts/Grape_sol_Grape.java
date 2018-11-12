package com.your.organisation.name;

import java.math.BigInteger;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.Callable;
import org.web3j.abi.TypeReference;
import org.web3j.abi.datatypes.Address;
import org.web3j.abi.datatypes.Bool;
import org.web3j.abi.datatypes.Function;
import org.web3j.abi.datatypes.Type;
import org.web3j.abi.datatypes.Utf8String;
import org.web3j.abi.datatypes.generated.Uint256;
import org.web3j.crypto.Credentials;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.RemoteCall;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.tuples.generated.Tuple4;
import org.web3j.tuples.generated.Tuple5;
import org.web3j.tuples.generated.Tuple6;
import org.web3j.tx.Contract;
import org.web3j.tx.TransactionManager;
import org.web3j.tx.gas.ContractGasProvider;

/**
 * <p>Auto generated code.
 * <p><strong>Do not modify!</strong>
 * <p>Please use the <a href="https://docs.web3j.io/command_line.html">web3j command line tools</a>,
 * or the org.web3j.codegen.SolidityFunctionWrapperGenerator in the 
 * <a href="https://github.com/web3j/web3j/tree/master/codegen">codegen module</a> to update.
 *
 * <p>Generated with web3j version 3.6.0.
 */
public class Grape_sol_Grape extends Contract {
    private static final String BINARY = "608060405260008055600060015534801561001957600080fd5b506118b5806100296000396000f3006080604052600436106100b95763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166307fdafec81146100be578063107c7ce0146100f85780631d937020146101255780633225ff011461014557806351d80e2a146101765780635e09f30a146101a6578063848a4dc5146101bb5780638dad280d146101ed5780639cc1623614610200578063c964fba214610213578063cec6723314610226578063d0d2e81814610239575b600080fd5b3480156100ca57600080fd5b506100de6100d93660046113a4565b610259565b6040516100ef959493929190611647565b60405180910390f35b34801561010457600080fd5b506101186101133660046113a4565b610438565b6040516100ef9190611639565b34801561013157600080fd5b5061011861014036600461137e565b6104cf565b34801561015157600080fd5b506101656101603660046113de565b6104ea565b6040516100ef9594939291906116cf565b34801561018257600080fd5b5061019661019136600461137e565b61053e565b6040516100ef9493929190611718565b6101b96101b43660046113a4565b610672565b005b3480156101c757600080fd5b506101db6101d636600461137e565b61079d565b6040516100ef96959493929190611756565b6101b96101fb3660046113a4565b610842565b6101b961020e36600461142b565b61096c565b6101186102213660046113a4565b610b0b565b6101b96102343660046113a4565b610d5b565b34801561024557600080fd5b5061011861025436600461137e565b610f49565b60008281526002602052604081206005810180546060939284928492839291908890811061028357fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156103115780601f106102e657610100808354040283529160200191610311565b820191906000526020600020905b8154815290600101906020018083116102f457829003601f168201915b50505050509550806006018781548110151561032957fe5b90600052602060002001549450806007018781548110151561034757fe5b600091825260209182902001805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152928301828280156103d55780601f106103aa576101008083540402835291602001916103d5565b820191906000526020600020905b8154815290600101906020018083116103b857829003601f168201915b5050505050935080600801878154811015156103ed57fe5b90600052602060002001549250806009018781548110151561040b57fe5b90600052602060002090602091828204019190069054906101000a900460ff169150509295509295909350565b600061044383610f49565b1515610484576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047b906116bf565b60405180910390fd5b61048d826104cf565b15156104c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047b906116af565b5060015b92915050565b6000428211156104e1575060016104e5565b5060005b919050565b6000928352600260208181526040808620948652600b90940181528385209285526007909201909152912080546001820154928201546003909201549093600160a060020a03938416939092169160609190565b600081815260026020526040812060068101805483928392839283918291829182918290811061056a57fe5b9060005260206000200154935084600601600081548110151561058957fe5b600091825260208220015460048701549094509092501561065d575060005b846004015481101561065d57600685018054829081106105c457fe5b90600052602060002001548410156105f457600685018054829081106105e657fe5b906000526020600020015493505b6006850180548290811061060457fe5b9060005260206000200154831115610634576006850180548290811061062657fe5b906000526020600020015492505b6008850180548290811061064457fe5b60009182526020909120015491909101906001016105a8565b50600490930154989197509550909350915050565b60005b6000838152600260205260409020600a0154811015610798576000838152600260209081526040808320848452600b01909152902060010154600160a060020a0316331480156106e457506000838152600260209081526040808320848452600b0190915290206005015460ff165b15610790576000838152600260205260409020600181015460069091018054600160a060020a03909216916108fc91600a918690811061072057fe5b906000526020600020015460010281151561073757fe5b049081150290604051600060405180830381858888f19350505050158015610763573d6000803e3d6000fd5b506000838152600260209081526040808320848452600b019091529020600501805460ff19169055610798565b600101610675565b505050565b600081815260026020526040812081908190819081908190815b81600a01548160ff1610156108375760ff81166000908152600b83016020526040902060010154600160a060020a031633141561082f5760ff8082166000818152600b8501602052604090206003810154600482015460058301546006909301548e9d50939b50909950975090911694509250610837565b6001016107b7565b505091939550919395565b60005b6000838152600260205260409020600a0154811015610798576000838152600260209081526040808320848452600b01909152902060010154600160a060020a0316331480156108b557506000838152600260209081526040808320848452600b0190915290206005015460ff16155b15610964576000838152600260205260409020600181015460069091018054600160a060020a03909216916108fc91600a91869081106108f157fe5b906000526020600020015460010281151561090857fe5b049081150290604051600060405180830381858888f19350505050158015610934573d6000803e3d6000fd5b506000838152600260209081526040808320848452600b019091529020600501805460ff19166001179055610798565b600101610845565b6040517350e2ceb9b439b7ce7b346be2cae87a8b38b98e9b90819060009060149082818181858883f193505050501580156109ab573d6000803e3d6000fd5b506040805161016081018252600080548083523360208085019182528486018f8152606086018f8152608087018f815260a088018f815260c089018f905260e089018e905261010089018d905261012089018c9052610140890188905295875260028085529890962087518155935160018501805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909216919091179055905196830196909655945160038201559151600483015551805192939192610a769260058501920190610f6d565b5060c08201518051610a92916006840191602090910190610fca565b5060e08201518051610aae916007840191602090910190610f6d565b506101008201518051610acb916008840191602090910190610fca565b506101208201518051610ae8916009840191602090910190611011565b506101409190910151600a90910155505060008054600101905550505050505050565b60008080805b6000868152600260205260409020600a0154821015610d5157506000858152600260208181526040808420858552600b019091529091209081015485148015610b5e5750600581015460ff165b15610d465760018181015460008881526002602052604090206006018054929550600160a060020a03909116916108fc919088908110610b9a57fe5b90600052602060002001549081150290604051600060405180830381858888f19350505050158015610bd0573d6000803e3d6000fd5b506000868152600260205260409020600181015460069091018054600160a060020a03909216916108fc91600a9189908110610c0857fe5b9060005260206000200154600102811515610c1f57fe5b049081150290604051600060405180830381858888f19350505050158015610c4b573d6000803e3d6000fd5b5060058101805460ff191690556006808201805460009081526007840160209081526040808320429055600180870154855485528285209091018054600160a060020a0390921673ffffffffffffffffffffffffffffffffffffffff199283161790559354835280832060029081018054339616959095179094558a835292905220018054600a919087908110610cde57fe5b9060005260206000200154600b02811515610cf557fe5b6006830180546000908152600785016020526040902092909104600390920191909155805460019081019091558101805473ffffffffffffffffffffffffffffffffffffffff191633179055610d51565b600190910190610b11565b5090949350505050565b600082815260026020819052604082209081015460038201549192918291610d8291610438565b1515610d8d57600080fd5b60008360080185815481101515610da057fe5b9060005260206000200154111515610de4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047b9061169f565b6001830154600684018054600160a060020a0390921693509085908110610e0757fe5b6000918252602082200154604051909250600160a060020a0384169183156108fc02918491818181858888f19350505050158015610e49573d6000803e3d6000fd5b506040805160e081018252868152336020808301918252828401888152426060850190815260808501878152600060a0870181815260c08801828152600a8d0180548452600b8e01909752989091209651875594516001808801805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909316929092179091559251600287015590516003860155516004850155915160058401805460ff191691151591909117905592516006909201919091558154810190915560088401805486908110610f1957fe5b9060005260206000200154038360080185815481101515610f3657fe5b6000918252602090912001555050505050565b60008115610f6557428210610f60575060016104e5565b6104e1565b5060016104e5565b828054828255906000526020600020908101928215610fba579160200282015b82811115610fba5782518051610faa9184916020909101906110b2565b5091602001919060010190610f8d565b50610fc692915061111f565b5090565b828054828255906000526020600020908101928215611005579160200282015b82811115611005578251825591602001919060010190610fea565b50610fc6929150611145565b82805482825590600052602060002090601f016020900481019282156110a65791602002820160005b8382111561107757835183826101000a81548160ff021916908315150217905550926020019260010160208160000104928301926001030261103a565b80156110a45782816101000a81549060ff0219169055600101602081600001049283019260010302611077565b505b50610fc692915061115f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106110f357805160ff1916838001178555611005565b828001600101855582156110055791820182811115611005578251825591602001919060010190610fea565b61114291905b80821115610fc6576000611139828261117d565b50600101611125565b90565b61114291905b80821115610fc6576000815560010161114b565b61114291905b80821115610fc657805460ff19168155600101611165565b50805460018160011615610100020316600290046000825580601f106111a357506111c1565b601f0160209004906000526020600020908101906111c19190611145565b50565b6000601f820183136111d557600080fd5b81356111e86111e3826117d7565b6117b0565b9150818183526020840193506020810190508385602084028201111561120d57600080fd5b60005b8381101561123957816112238882611310565b8452506020928301929190910190600101611210565b5050505092915050565b6000601f8201831361125457600080fd5b81356112626111e3826117d7565b81815260209384019390925082018360005b83811015611239578135860161128a8882611323565b8452506020928301929190910190600101611274565b6000601f820183136112b157600080fd5b81356112bf6111e3826117d7565b915081818352602084019350602081019050838560208402820111156112e457600080fd5b60005b8381101561123957816112fa8882611372565b84525060209283019291909101906001016112e7565b600061131c8235611830565b9392505050565b6000601f8201831361133457600080fd5b81356113426111e3826117f8565b9150808252602083016020830185838301111561135e57600080fd5b611369838284611835565b50505092915050565b600061131c8235611142565b60006020828403121561139057600080fd5b600061139c8484611372565b949350505050565b600080604083850312156113b757600080fd5b60006113c38585611372565b92505060206113d485828601611372565b9150509250929050565b6000806000606084860312156113f357600080fd5b60006113ff8686611372565b935050602061141086828701611372565b925050604061142186828701611372565b9150509250925092565b600080600080600080600080610100898b03121561144857600080fd5b60006114548b8b611372565b98505060206114658b828c01611372565b97505060406114768b828c01611372565b965050606089013567ffffffffffffffff81111561149357600080fd5b61149f8b828c01611243565b955050608089013567ffffffffffffffff8111156114bc57600080fd5b6114c88b828c016112a0565b94505060a089013567ffffffffffffffff8111156114e557600080fd5b6114f18b828c01611243565b93505060c089013567ffffffffffffffff81111561150e57600080fd5b61151a8b828c016112a0565b92505060e089013567ffffffffffffffff81111561153757600080fd5b6115438b828c016111c4565b9150509295985092959890939650565b61155c81611824565b82525050565b61155c81611830565b600061157682611820565b80845261158a816020860160208601611841565b61159381611871565b9093016020019392505050565b600e81527f4e6f206d6f7265205469636b6574000000000000000000000000000000000000602082015260400190565b600c81527f456e642053616c6554696d650000000000000000000000000000000000000000602082015260400190565b600e81527f4265666f652053616c6554696d65000000000000000000000000000000000000602082015260400190565b61155c81611142565b602081016104c98284611562565b60a08082528101611658818861156b565b90506116676020830187611630565b8181036040830152611679818661156b565b90506116886060830185611630565b6116956080830184611562565b9695505050505050565b602080825281016104c9816115a0565b602080825281016104c9816115d0565b602080825281016104c981611600565b60a081016116dd8288611630565b6116ea6020830187611553565b6116f76040830186611553565b8181036060830152611709818561156b565b90506116956080830184611630565b608081016117268287611630565b6117336020830186611630565b6117406040830185611630565b61174d6060830184611630565b95945050505050565b60c081016117648289611630565b6117716020830188611630565b61177e6040830187611630565b61178b6060830186611630565b6117986080830185611562565b6117a560a0830184611630565b979650505050505050565b60405181810167ffffffffffffffff811182821017156117cf57600080fd5b604052919050565b600067ffffffffffffffff8211156117ee57600080fd5b5060209081020190565b600067ffffffffffffffff82111561180f57600080fd5b506020601f91909101601f19160190565b5190565b600160a060020a031690565b151590565b82818337506000910152565b60005b8381101561185c578181015183820152602001611844565b8381111561186b576000848401525b50505050565b601f01601f1916905600a265627a7a72305820d9af489d8b5384a9d6c2d6267baa0d8c4cc064921e775170c6353d1a2b5dddbe6c6578706572696d656e74616cf50037";

    public static final String FUNC_VIEWCONCERTTICKETTYPE = "viewConcertTicketType";

    public static final String FUNC_CANONLYSALEWITHINSALETIME = "canOnlySaleWithinSaleTime";

    public static final String FUNC_CHECKENDSALETIME = "checkEndSaleTime";

    public static final String FUNC_VIEWMYTICKETHISTORY = "viewMyTicketHistory";

    public static final String FUNC_VIEWCONCERT = "viewConcert";

    public static final String FUNC_CANCLESELLUSEDTICKET = "cancleSellUsedTicket";

    public static final String FUNC_VIEWMYTICKET = "viewMyTicket";

    public static final String FUNC_SELLUSEDTICKET = "sellUsedTicket";

    public static final String FUNC_CREATECONCERT = "createConcert";

    public static final String FUNC_BUYUSEDTICKET = "buyUsedTicket";

    public static final String FUNC_PAYTICKET = "payTicket";

    public static final String FUNC_CHECKSTARTSALETIME = "checkStartSaleTime";

    @Deprecated
    protected Grape_sol_Grape(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    protected Grape_sol_Grape(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, credentials, contractGasProvider);
    }

    @Deprecated
    protected Grape_sol_Grape(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        super(BINARY, contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    protected Grape_sol_Grape(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        super(BINARY, contractAddress, web3j, transactionManager, contractGasProvider);
    }

    public RemoteCall<Tuple5<String, BigInteger, String, BigInteger, Boolean>> viewConcertTicketType(BigInteger concertId, BigInteger ticketType) {
        final Function function = new Function(FUNC_VIEWCONCERTTICKETTYPE, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(concertId), 
                new org.web3j.abi.datatypes.generated.Uint256(ticketType)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}, new TypeReference<Uint256>() {}, new TypeReference<Utf8String>() {}, new TypeReference<Uint256>() {}, new TypeReference<Bool>() {}));
        return new RemoteCall<Tuple5<String, BigInteger, String, BigInteger, Boolean>>(
                new Callable<Tuple5<String, BigInteger, String, BigInteger, Boolean>>() {
                    @Override
                    public Tuple5<String, BigInteger, String, BigInteger, Boolean> call() throws Exception {
                        List<Type> results = executeCallMultipleValueReturn(function);
                        return new Tuple5<String, BigInteger, String, BigInteger, Boolean>(
                                (String) results.get(0).getValue(), 
                                (BigInteger) results.get(1).getValue(), 
                                (String) results.get(2).getValue(), 
                                (BigInteger) results.get(3).getValue(), 
                                (Boolean) results.get(4).getValue());
                    }
                });
    }

    public RemoteCall<Boolean> canOnlySaleWithinSaleTime(BigInteger _saleStartTime, BigInteger _saleEndTime) {
        final Function function = new Function(FUNC_CANONLYSALEWITHINSALETIME, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(_saleStartTime), 
                new org.web3j.abi.datatypes.generated.Uint256(_saleEndTime)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Bool>() {}));
        return executeRemoteCallSingleValueReturn(function, Boolean.class);
    }

    public RemoteCall<Boolean> checkEndSaleTime(BigInteger _saleEndTime) {
        final Function function = new Function(FUNC_CHECKENDSALETIME, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(_saleEndTime)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Bool>() {}));
        return executeRemoteCallSingleValueReturn(function, Boolean.class);
    }

    public RemoteCall<Tuple5<BigInteger, String, String, String, BigInteger>> viewMyTicketHistory(BigInteger concertId, BigInteger ticketId, BigInteger historyIndex) {
        final Function function = new Function(FUNC_VIEWMYTICKETHISTORY, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(concertId), 
                new org.web3j.abi.datatypes.generated.Uint256(ticketId), 
                new org.web3j.abi.datatypes.generated.Uint256(historyIndex)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Uint256>() {}, new TypeReference<Address>() {}, new TypeReference<Address>() {}, new TypeReference<Utf8String>() {}, new TypeReference<Uint256>() {}));
        return new RemoteCall<Tuple5<BigInteger, String, String, String, BigInteger>>(
                new Callable<Tuple5<BigInteger, String, String, String, BigInteger>>() {
                    @Override
                    public Tuple5<BigInteger, String, String, String, BigInteger> call() throws Exception {
                        List<Type> results = executeCallMultipleValueReturn(function);
                        return new Tuple5<BigInteger, String, String, String, BigInteger>(
                                (BigInteger) results.get(0).getValue(), 
                                (String) results.get(1).getValue(), 
                                (String) results.get(2).getValue(), 
                                (String) results.get(3).getValue(), 
                                (BigInteger) results.get(4).getValue());
                    }
                });
    }

    public RemoteCall<Tuple4<BigInteger, BigInteger, BigInteger, BigInteger>> viewConcert(BigInteger concertId) {
        final Function function = new Function(FUNC_VIEWCONCERT, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(concertId)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Uint256>() {}, new TypeReference<Uint256>() {}, new TypeReference<Uint256>() {}, new TypeReference<Uint256>() {}));
        return new RemoteCall<Tuple4<BigInteger, BigInteger, BigInteger, BigInteger>>(
                new Callable<Tuple4<BigInteger, BigInteger, BigInteger, BigInteger>>() {
                    @Override
                    public Tuple4<BigInteger, BigInteger, BigInteger, BigInteger> call() throws Exception {
                        List<Type> results = executeCallMultipleValueReturn(function);
                        return new Tuple4<BigInteger, BigInteger, BigInteger, BigInteger>(
                                (BigInteger) results.get(0).getValue(), 
                                (BigInteger) results.get(1).getValue(), 
                                (BigInteger) results.get(2).getValue(), 
                                (BigInteger) results.get(3).getValue());
                    }
                });
    }

    public RemoteCall<TransactionReceipt> cancleSellUsedTicket(BigInteger _concertId, BigInteger _ticketType, BigInteger weiValue) {
        final Function function = new Function(
                FUNC_CANCLESELLUSEDTICKET, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(_concertId), 
                new org.web3j.abi.datatypes.generated.Uint256(_ticketType)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function, weiValue);
    }

    public RemoteCall<Tuple6<BigInteger, BigInteger, BigInteger, BigInteger, Boolean, BigInteger>> viewMyTicket(BigInteger concertId) {
        final Function function = new Function(FUNC_VIEWMYTICKET, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(concertId)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Uint256>() {}, new TypeReference<Uint256>() {}, new TypeReference<Uint256>() {}, new TypeReference<Uint256>() {}, new TypeReference<Bool>() {}, new TypeReference<Uint256>() {}));
        return new RemoteCall<Tuple6<BigInteger, BigInteger, BigInteger, BigInteger, Boolean, BigInteger>>(
                new Callable<Tuple6<BigInteger, BigInteger, BigInteger, BigInteger, Boolean, BigInteger>>() {
                    @Override
                    public Tuple6<BigInteger, BigInteger, BigInteger, BigInteger, Boolean, BigInteger> call() throws Exception {
                        List<Type> results = executeCallMultipleValueReturn(function);
                        return new Tuple6<BigInteger, BigInteger, BigInteger, BigInteger, Boolean, BigInteger>(
                                (BigInteger) results.get(0).getValue(), 
                                (BigInteger) results.get(1).getValue(), 
                                (BigInteger) results.get(2).getValue(), 
                                (BigInteger) results.get(3).getValue(), 
                                (Boolean) results.get(4).getValue(), 
                                (BigInteger) results.get(5).getValue());
                    }
                });
    }

    public RemoteCall<TransactionReceipt> sellUsedTicket(BigInteger _concertId, BigInteger _ticketType, BigInteger weiValue) {
        final Function function = new Function(
                FUNC_SELLUSEDTICKET, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(_concertId), 
                new org.web3j.abi.datatypes.generated.Uint256(_ticketType)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function, weiValue);
    }

    public RemoteCall<TransactionReceipt> createConcert(BigInteger _saleStartTime, BigInteger _saleEndTime, BigInteger _ticketTypeCounts, List<String> _ticketName, List<BigInteger> _ticketPrice, List<String> _ticketDescription, List<BigInteger> _ticketAmount, List<Boolean> _isTransferable, BigInteger weiValue) {
        final Function function = new Function(
                FUNC_CREATECONCERT, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(_saleStartTime), 
                new org.web3j.abi.datatypes.generated.Uint256(_saleEndTime), 
                new org.web3j.abi.datatypes.generated.Uint256(_ticketTypeCounts), 
                new org.web3j.abi.datatypes.DynamicArray<org.web3j.abi.datatypes.Utf8String>(
                        org.web3j.abi.Utils.typeMap(_ticketName, org.web3j.abi.datatypes.Utf8String.class)), 
                new org.web3j.abi.datatypes.DynamicArray<org.web3j.abi.datatypes.generated.Uint256>(
                        org.web3j.abi.Utils.typeMap(_ticketPrice, org.web3j.abi.datatypes.generated.Uint256.class)), 
                new org.web3j.abi.datatypes.DynamicArray<org.web3j.abi.datatypes.Utf8String>(
                        org.web3j.abi.Utils.typeMap(_ticketDescription, org.web3j.abi.datatypes.Utf8String.class)), 
                new org.web3j.abi.datatypes.DynamicArray<org.web3j.abi.datatypes.generated.Uint256>(
                        org.web3j.abi.Utils.typeMap(_ticketAmount, org.web3j.abi.datatypes.generated.Uint256.class)), 
                new org.web3j.abi.datatypes.DynamicArray<org.web3j.abi.datatypes.Bool>(
                        org.web3j.abi.Utils.typeMap(_isTransferable, org.web3j.abi.datatypes.Bool.class))), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function, weiValue);
    }

    public RemoteCall<TransactionReceipt> buyUsedTicket(BigInteger _concertId, BigInteger _ticketType, BigInteger weiValue) {
        final Function function = new Function(
                FUNC_BUYUSEDTICKET, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(_concertId), 
                new org.web3j.abi.datatypes.generated.Uint256(_ticketType)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function, weiValue);
    }

    public RemoteCall<TransactionReceipt> payTicket(BigInteger _concertId, BigInteger _ticketType, BigInteger weiValue) {
        final Function function = new Function(
                FUNC_PAYTICKET, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(_concertId), 
                new org.web3j.abi.datatypes.generated.Uint256(_ticketType)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function, weiValue);
    }

    public RemoteCall<Boolean> checkStartSaleTime(BigInteger _saleStartTime) {
        final Function function = new Function(FUNC_CHECKSTARTSALETIME, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(_saleStartTime)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Bool>() {}));
        return executeRemoteCallSingleValueReturn(function, Boolean.class);
    }

    public static RemoteCall<Grape_sol_Grape> deploy(Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        return deployRemoteCall(Grape_sol_Grape.class, web3j, credentials, contractGasProvider, BINARY, "");
    }

    @Deprecated
    public static RemoteCall<Grape_sol_Grape> deploy(Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(Grape_sol_Grape.class, web3j, credentials, gasPrice, gasLimit, BINARY, "");
    }

    public static RemoteCall<Grape_sol_Grape> deploy(Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return deployRemoteCall(Grape_sol_Grape.class, web3j, transactionManager, contractGasProvider, BINARY, "");
    }

    @Deprecated
    public static RemoteCall<Grape_sol_Grape> deploy(Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return deployRemoteCall(Grape_sol_Grape.class, web3j, transactionManager, gasPrice, gasLimit, BINARY, "");
    }

    @Deprecated
    public static Grape_sol_Grape load(String contractAddress, Web3j web3j, Credentials credentials, BigInteger gasPrice, BigInteger gasLimit) {
        return new Grape_sol_Grape(contractAddress, web3j, credentials, gasPrice, gasLimit);
    }

    @Deprecated
    public static Grape_sol_Grape load(String contractAddress, Web3j web3j, TransactionManager transactionManager, BigInteger gasPrice, BigInteger gasLimit) {
        return new Grape_sol_Grape(contractAddress, web3j, transactionManager, gasPrice, gasLimit);
    }

    public static Grape_sol_Grape load(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider) {
        return new Grape_sol_Grape(contractAddress, web3j, credentials, contractGasProvider);
    }

    public static Grape_sol_Grape load(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider) {
        return new Grape_sol_Grape(contractAddress, web3j, transactionManager, contractGasProvider);
    }
}
package com;

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
    private static final String BINARY = "608060405260008055600060015534801561001957600080fd5b50611bfc806100296000396000f300608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630275d93b1461009e57806307fdafec146100ba5780633225ff01146100fa57806351d80e2a1461013b5780635e09f30a1461017c578063848a4dc5146101985780638dad280d146101da578063c964fba2146101f6578063cec6723314610226575b600080fd5b6100b860048036036100b39190810190611771565b610242565b005b3480156100c657600080fd5b506100e160048036036100dc91908101906116e6565b6103c2565b6040516100f19493929190611940565b60405180910390f35b34801561010657600080fd5b50610121600480360361011c9190810190611722565b61050e565b60405161013295949392919061198c565b60405180910390f35b34801561014757600080fd5b50610162600480360361015d91908101906116bd565b6105bd565b6040516101739594939291906118d2565b60405180910390f35b610196600480360361019191908101906116e6565b610739565b005b3480156101a457600080fd5b506101bf60048036036101ba91908101906116bd565b61092e565b6040516101d1969594939291906119e6565b60405180910390f35b6101f460048036036101ef91908101906116e6565b610a84565b005b610210600480360361020b91908101906116e6565b610c7a565b60405161021d9190611925565b60405180910390f35b610240600480360361023b91908101906116e6565b611035565b005b6101406040519081016040528060005481526020013373ffffffffffffffffffffffffffffffffffffffff168152602001888152602001878152602001868152602001858152602001848152602001838152602001828152602001600081525060026000805481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a0820151816005019080519060200190610341929190611223565b5060c082015181600601908051906020019061035e929190611283565b5060e082015181600701908051906020019061037b929190611283565b506101008201518160080190805190602001906103999291906112d0565b506101208201518160090155905050600080815480929190600101919050555050505050505050565b606060008060008060026000888152602001908152602001600020905080600501868154811015156103f057fe5b906000526020600020018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561048e5780601f106104635761010080835404028352916020019161048e565b820191906000526020600020905b81548152906001019060200180831161047157829003601f168201915b5050505050945080600601868154811015156104a657fe5b9060005260206000200154935080600701868154811015156104c457fe5b9060005260206000200154925080600801868154811015156104e257fe5b90600052602060002090602091828204019190069054906101000a900460ff1691505092959194509250565b60008060006060600080600260008a8152602001908152602001600020600a01600089815260200190815260200160002060070160008881526020019081526020016000209050806000015495508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1694508060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1693508060030154915050939792965093509350565b600080600080600080600080600080600260008c815260200190815260200160002094508460060160008154811015156105f357fe5b9060005260206000200154935084600601600081548110151561061257fe5b9060005260206000200154925060009150600085600401541415156106f457600090505b84600401548110156106f357846006018181548110151561065357fe5b906000526020600020015484101561068457846006018181548110151561067657fe5b906000526020600020015493505b846006018181548110151561069557fe5b90600052602060002001548311156106c65784600601818154811015156106b857fe5b906000526020600020015492505b84600701818154811015156106d757fe5b9060005260206000200154820191508080600101915050610636565b5b8460010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16995084600401549850839750829650819550505050505091939590929450565b60008090505b6002600084815260200190815260200160002060090154811015610929573373ffffffffffffffffffffffffffffffffffffffff1660026000858152602001908152602001600020600a01600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148015610816575060026000848152602001908152602001600020600a01600082815260200190815260200160002060050160009054906101000a900460ff165b1561091c576002600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600a6001600260008881526020019081526020016000206006018681548110151561089257fe5b9060005260206000200154028115156108a757fe5b049081150290604051600060405180830381858888f193505050501580156108d3573d6000803e3d6000fd5b50600060026000858152602001908152602001600020600a01600083815260200190815260200160002060050160006101000a81548160ff021916908315150217905550610929565b808060010191505061073f565b505050565b600080600080600080600080600260008a81526020019081526020016000209150600090505b81600901548160ff161015610a795781600a0160008260ff16815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610a6c57889750808060019003915060ff16965081600a0160008260ff16815260200190815260200160002060030154955081600a0160008260ff16815260200190815260200160002060040154945081600a0160008260ff16815260200190815260200160002060050160009054906101000a900460ff16935081600a0160008260ff168152602001908152602001600020600601549250610a79565b8080600101915050610954565b505091939550919395565b60008090505b6002600084815260200190815260200160002060090154811015610c75573373ffffffffffffffffffffffffffffffffffffffff1660026000858152602001908152602001600020600a01600083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148015610b62575060026000848152602001908152602001600020600a01600082815260200190815260200160002060050160009054906101000a900460ff16155b15610c68576002600084815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600a60016002600088815260200190815260200160002060060186815481101515610bde57fe5b906000526020600020015402811515610bf357fe5b049081150290604051600060405180830381858888f19350505050158015610c1f573d6000803e3d6000fd5b50600160026000858152602001908152602001600020600a01600083815260200190815260200160002060050160006101000a81548160ff021916908315150217905550610c75565b8080600101915050610a8a565b505050565b60008060008060009250600091505b60026000878152602001908152602001600020600901548210156110295760026000878152602001908152602001600020600a0160008381526020019081526020016000209050848160020154148015610cf157508060050160009054906101000a900460ff165b1561101c57600192508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc6002600089815260200190815260200160002060060187815481101515610d5b57fe5b90600052602060002001549081150290604051600060405180830381858888f19350505050158015610d91573d6000803e3d6000fd5b506002600087815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600a6001600260008b815260200190815260200160002060060189815481101515610e0957fe5b906000526020600020015402811515610e1e57fe5b049081150290604051600060405180830381858888f19350505050158015610e4a573d6000803e3d6000fd5b5060008160050160006101000a81548160ff0219169083151502179055504281600701600083600601548152602001908152602001600020600001819055508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160070160008360060154815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550338160070160008360060154815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600a600b6002600089815260200190815260200160002060060187815481101515610f8a57fe5b906000526020600020015402811515610f9f57fe5b0481600701600083600601548152602001908152602001600020600301819055508060060160008154809291906001019190505550338160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611029565b8180600101925050610c89565b82935050505092915050565b60e0604051908101604052808381526020013373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001428152602001600260008581526020019081526020016000206006018381548110151561109257fe5b90600052602060002001548152602001600015158152602001600081525060026000848152602001908152602001600020600a016000600260008681526020019081526020016000206009015481526020019081526020016000206000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff02191690831515021790555060c0820151816006015590505060016002600084815260200190815260200160002060090154016002600084815260200190815260200160002060090181905550600160026000848152602001908152602001600020600701828154811015156111e257fe5b906000526020600020015403600260008481526020019081526020016000206007018281548110151561121157fe5b90600052602060002001819055505050565b828054828255906000526020600020908101928215611272579160200282015b82811115611271578251829080519060200190611261929190611376565b5091602001919060010190611243565b5b50905061127f91906113f6565b5090565b8280548282559060005260206000209081019282156112bf579160200282015b828111156112be5782518255916020019190600101906112a3565b5b5090506112cc9190611422565b5090565b82805482825590600052602060002090601f016020900481019282156113655791602002820160005b8382111561133657835183826101000a81548160ff02191690831515021790555092602001926001016020816000010492830192600103026112f9565b80156113635782816101000a81549060ff0219169055600101602081600001049283019260010302611336565b505b5090506113729190611447565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106113b757805160ff19168380011785556113e5565b828001600101855582156113e5579182015b828111156113e45782518255916020019190600101906113c9565b5b5090506113f29190611422565b5090565b61141f91905b8082111561141b57600081816114129190611477565b506001016113fc565b5090565b90565b61144491905b80821115611440576000816000905550600101611428565b5090565b90565b61147491905b8082111561147057600081816101000a81549060ff02191690555060010161144d565b5090565b90565b50805460018160011615610100020316600290046000825580601f1061149d57506114bc565b601f0160209004906000526020600020908101906114bb9190611422565b5b50565b600082601f83011215156114d257600080fd5b81356114e56114e082611a74565b611a47565b9150818183526020840193506020810190508385602084028201111561150a57600080fd5b60005b8381101561153a5781611520888261163f565b84526020840193506020830192505060018101905061150d565b5050505092915050565b600082601f830112151561155757600080fd5b813561156a61156582611a9c565b611a47565b9150818183526020840193506020810190508360005b838110156115b057813586016115968882611653565b845260208401935060208301925050600181019050611580565b5050505092915050565b600082601f83011215156115cd57600080fd5b81356115e06115db82611ac4565b611a47565b9150818183526020840193506020810190508385602084028201111561160557600080fd5b60005b83811015611635578161161b88826116a9565b845260208401935060208301925050600181019050611608565b5050505092915050565b600061164b8235611b59565b905092915050565b600082601f830112151561166657600080fd5b813561167961167482611aec565b611a47565b9150808252602083016020830185838301111561169557600080fd5b6116a0838284611b6f565b50505092915050565b60006116b58235611b65565b905092915050565b6000602082840312156116cf57600080fd5b60006116dd848285016116a9565b91505092915050565b600080604083850312156116f957600080fd5b6000611707858286016116a9565b9250506020611718858286016116a9565b9150509250929050565b60008060006060848603121561173757600080fd5b6000611745868287016116a9565b9350506020611756868287016116a9565b9250506040611767868287016116a9565b9150509250925092565b600080600080600080600060e0888a03121561178c57600080fd5b600061179a8a828b016116a9565b97505060206117ab8a828b016116a9565b96505060406117bc8a828b016116a9565b955050606088013567ffffffffffffffff8111156117d957600080fd5b6117e58a828b01611544565b945050608088013567ffffffffffffffff81111561180257600080fd5b61180e8a828b016115ba565b93505060a088013567ffffffffffffffff81111561182b57600080fd5b6118378a828b016115ba565b92505060c088013567ffffffffffffffff81111561185457600080fd5b6118608a828b016114bf565b91505092959891949750929550565b61187881611b23565b82525050565b61188781611b43565b82525050565b600061189882611b18565b8084526118ac816020860160208601611b7e565b6118b581611bb1565b602085010191505092915050565b6118cc81611b4f565b82525050565b600060a0820190506118e7600083018861186f565b6118f460208301876118c3565b61190160408301866118c3565b61190e60608301856118c3565b61191b60808301846118c3565b9695505050505050565b600060208201905061193a600083018461187e565b92915050565b6000608082019050818103600083015261195a818761188d565b905061196960208301866118c3565b61197660408301856118c3565b611983606083018461187e565b95945050505050565b600060a0820190506119a160008301886118c3565b6119ae602083018761186f565b6119bb604083018661186f565b81810360608301526119cd818561188d565b90506119dc60808301846118c3565b9695505050505050565b600060c0820190506119fb60008301896118c3565b611a0860208301886118c3565b611a1560408301876118c3565b611a2260608301866118c3565b611a2f608083018561187e565b611a3c60a08301846118c3565b979650505050505050565b6000604051905081810181811067ffffffffffffffff82111715611a6a57600080fd5b8060405250919050565b600067ffffffffffffffff821115611a8b57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115611ab357600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115611adb57600080fd5b602082029050602081019050919050565b600067ffffffffffffffff821115611b0357600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60008115159050919050565b6000819050919050565b60008115159050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611b9c578082015181840152602081019050611b81565b83811115611bab576000848401525b50505050565b6000601f19601f83011690509190505600a265627a7a723058202c942e1249c9e8abffdcc67d0b8b5a3726d701582377097e21964024e46c0edc6c6578706572696d656e74616cf50037";

    public static final String FUNC_BUYUSEDTICKET = "buyUsedTicket";

    public static final String FUNC_CANCLESELLUSEDTICKET = "cancleSellUsedTicket";

    public static final String FUNC_CREATECONCERT = "createConcert";

    public static final String FUNC_PAYTICKET = "payTicket";

    public static final String FUNC_SELLUSEDTICKET = "sellUsedTicket";

    public static final String FUNC_VIEWCONCERT = "viewConcert";

    public static final String FUNC_VIEWCONCERTTICKETTYPE = "viewConcertTicketType";

    public static final String FUNC_VIEWMYTICKET = "viewMyTicket";

    public static final String FUNC_VIEWMYTICKETHISTORY = "viewMyTicketHistory";

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

    public RemoteCall<TransactionReceipt> buyUsedTicket(BigInteger _concertId, BigInteger _ticketType, BigInteger weiValue) {
        final Function function = new Function(
                FUNC_BUYUSEDTICKET, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(_concertId), 
                new org.web3j.abi.datatypes.generated.Uint256(_ticketType)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function, weiValue);
    }

    public RemoteCall<TransactionReceipt> cancleSellUsedTicket(BigInteger _concertId, BigInteger _ticketType, BigInteger weiValue) {
        final Function function = new Function(
                FUNC_CANCLESELLUSEDTICKET, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(_concertId), 
                new org.web3j.abi.datatypes.generated.Uint256(_ticketType)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function, weiValue);
    }

    public RemoteCall<TransactionReceipt> createConcert(BigInteger _saleStartTime, BigInteger _saleEndTime, BigInteger _ticketTypeCounts, List<String> _ticketName, List<BigInteger> _ticketPrice, List<BigInteger> _ticketAmount, List<Boolean> _isTransferable, BigInteger weiValue) {
        final Function function = new Function(
                FUNC_CREATECONCERT, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(_saleStartTime), 
                new org.web3j.abi.datatypes.generated.Uint256(_saleEndTime), 
                new org.web3j.abi.datatypes.generated.Uint256(_ticketTypeCounts), 
                new org.web3j.abi.datatypes.DynamicArray<org.web3j.abi.datatypes.Utf8String>(
                        org.web3j.abi.Utils.typeMap(_ticketName, org.web3j.abi.datatypes.Utf8String.class)), 
                new org.web3j.abi.datatypes.DynamicArray<org.web3j.abi.datatypes.generated.Uint256>(
                        org.web3j.abi.Utils.typeMap(_ticketPrice, org.web3j.abi.datatypes.generated.Uint256.class)), 
                new org.web3j.abi.datatypes.DynamicArray<org.web3j.abi.datatypes.generated.Uint256>(
                        org.web3j.abi.Utils.typeMap(_ticketAmount, org.web3j.abi.datatypes.generated.Uint256.class)), 
                new org.web3j.abi.datatypes.DynamicArray<org.web3j.abi.datatypes.Bool>(
                        org.web3j.abi.Utils.typeMap(_isTransferable, org.web3j.abi.datatypes.Bool.class))), 
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

    public RemoteCall<TransactionReceipt> sellUsedTicket(BigInteger _concertId, BigInteger _ticketType, BigInteger weiValue) {
        final Function function = new Function(
                FUNC_SELLUSEDTICKET, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(_concertId), 
                new org.web3j.abi.datatypes.generated.Uint256(_ticketType)), 
                Collections.<TypeReference<?>>emptyList());
        return executeRemoteCallTransaction(function, weiValue);
    }

    public RemoteCall<Tuple5<String, BigInteger, BigInteger, BigInteger, BigInteger>> viewConcert(BigInteger concertId) {
        final Function function = new Function(FUNC_VIEWCONCERT, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(concertId)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Address>() {}, new TypeReference<Uint256>() {}, new TypeReference<Uint256>() {}, new TypeReference<Uint256>() {}, new TypeReference<Uint256>() {}));
        return new RemoteCall<Tuple5<String, BigInteger, BigInteger, BigInteger, BigInteger>>(
                new Callable<Tuple5<String, BigInteger, BigInteger, BigInteger, BigInteger>>() {
                    @Override
                    public Tuple5<String, BigInteger, BigInteger, BigInteger, BigInteger> call() throws Exception {
                        List<Type> results = executeCallMultipleValueReturn(function);
                        return new Tuple5<String, BigInteger, BigInteger, BigInteger, BigInteger>(
                                (String) results.get(0).getValue(), 
                                (BigInteger) results.get(1).getValue(), 
                                (BigInteger) results.get(2).getValue(), 
                                (BigInteger) results.get(3).getValue(), 
                                (BigInteger) results.get(4).getValue());
                    }
                });
    }

    public RemoteCall<Tuple4<String, BigInteger, BigInteger, Boolean>> viewConcertTicketType(BigInteger concertId, BigInteger ticketType) {
        final Function function = new Function(FUNC_VIEWCONCERTTICKETTYPE, 
                Arrays.<Type>asList(new org.web3j.abi.datatypes.generated.Uint256(concertId), 
                new org.web3j.abi.datatypes.generated.Uint256(ticketType)), 
                Arrays.<TypeReference<?>>asList(new TypeReference<Utf8String>() {}, new TypeReference<Uint256>() {}, new TypeReference<Uint256>() {}, new TypeReference<Bool>() {}));
        return new RemoteCall<Tuple4<String, BigInteger, BigInteger, Boolean>>(
                new Callable<Tuple4<String, BigInteger, BigInteger, Boolean>>() {
                    @Override
                    public Tuple4<String, BigInteger, BigInteger, Boolean> call() throws Exception {
                        List<Type> results = executeCallMultipleValueReturn(function);
                        return new Tuple4<String, BigInteger, BigInteger, Boolean>(
                                (String) results.get(0).getValue(), 
                                (BigInteger) results.get(1).getValue(), 
                                (BigInteger) results.get(2).getValue(), 
                                (Boolean) results.get(3).getValue());
                    }
                });
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

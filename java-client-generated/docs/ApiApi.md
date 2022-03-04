# ApiApi

All URIs are relative to *https://virtserver.swaggerhub.com/TriplePlayPay/payment/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate**](ApiApi.md#activate) | **POST** /activate | Setup new Credit Card Terminal.
[**authorize**](ApiApi.md#authorize) | **POST** /authorize | Used to verify funds when the total amount of the purchase is unknown.
[**callVoid**](ApiApi.md#callVoid) | **POST** /void | A Void transaction can be used to back out a previous Sale transaction.
[**charge**](ApiApi.md#charge) | **POST** /charge | Process payment or settle a previous charge. *card **bank
[**credit**](ApiApi.md#credit) | **POST** /credit | A Credit transaction is used to refund a cardholder for a previous transaction.
[**enroll**](ApiApi.md#enroll) | **POST** /enroll | Enroll a new merchant or retrieve status of pending merchant.
[**report**](ApiApi.md#report) | **GET** /report | Get transaction detail history
[**settle**](ApiApi.md#settle) | **POST** /settle | Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.
[**tokenize**](ApiApi.md#tokenize) | **POST** /tokenize | Create a token for later use.

<a name="activate"></a>
# **activate**
> List&lt;Response&gt; activate(activationCode, terminalId, meta)

Setup new Credit Card Terminal.

Setup new Credit Card Terminal.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ApiApi;


ApiApi apiInstance = new ApiApi();
String activationCode = "activationCode_example"; // String | Activation Code on Terminal Screen
String terminalId = "terminalId_example"; // String | Custom Name of Terminal
Object meta = null; // Object | Optional user defined object to be returned with future response
try {
    List<Response> result = apiInstance.activate(activationCode, terminalId, meta);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ApiApi#activate");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationCode** | **String**| Activation Code on Terminal Screen |
 **terminalId** | **String**| Custom Name of Terminal |
 **meta** | [**Object**](.md)| Optional user defined object to be returned with future response | [optional]

### Return type

[**List&lt;Response&gt;**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="authorize"></a>
# **authorize**
> List&lt;Response&gt; authorize(amount, cc, mm, yy, cvv, zipcode, ticket, meta)

Used to verify funds when the total amount of the purchase is unknown.

Used to verify funds when the total amount of the purchase is unknown.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ApiApi;


ApiApi apiInstance = new ApiApi();
String amount = "amount_example"; // String | The total transaction amount. This is the amount of funds to move on the card
String cc = "cc_example"; // String | Credit Card Number with or without dashes
String mm = "mm_example"; // String | 2 digit Month
String yy = "yy_example"; // String | 2 digit Year
String cvv = "cvv_example"; // String | Card Verification Value found on the card (CVV2, CVC2, CID)
String zipcode = "zipcode_example"; // String | Zip code. *optional synonym: zip
String ticket = "ticket_example"; // String | Ticket Number used by POS
Object meta = null; // Object | Optional user defined object to be returned with future response
try {
    List<Response> result = apiInstance.authorize(amount, cc, mm, yy, cvv, zipcode, ticket, meta);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ApiApi#authorize");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **String**| The total transaction amount. This is the amount of funds to move on the card |
 **cc** | **String**| Credit Card Number with or without dashes |
 **mm** | **String**| 2 digit Month |
 **yy** | **String**| 2 digit Year |
 **cvv** | **String**| Card Verification Value found on the card (CVV2, CVC2, CID) |
 **zipcode** | **String**| Zip code. *optional synonym: zip | [optional]
 **ticket** | **String**| Ticket Number used by POS | [optional]
 **meta** | [**Object**](.md)| Optional user defined object to be returned with future response | [optional]

### Return type

[**List&lt;Response&gt;**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="callVoid"></a>
# **callVoid**
> List&lt;Response&gt; callVoid(id, ticket, meta)

A Void transaction can be used to back out a previous Sale transaction.

A Void transaction can be used to back out a previous Sale transaction.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ApiApi;


ApiApi apiInstance = new ApiApi();
String id = "id_example"; // String | Transaction ID of charged event. *optional synonym: transactionId
String ticket = "ticket_example"; // String | Ticket Number used by POS
Object meta = null; // Object | Optional user defined object to be returned with future response
try {
    List<Response> result = apiInstance.callVoid(id, ticket, meta);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ApiApi#callVoid");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Transaction ID of charged event. *optional synonym: transactionId |
 **ticket** | **String**| Ticket Number used by POS | [optional]
 **meta** | [**Object**](.md)| Optional user defined object to be returned with future response | [optional]

### Return type

[**List&lt;Response&gt;**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="charge"></a>
# **charge**
> List&lt;Response&gt; charge(amount, cc, mm, yy, cvv, accountNumber, routingNumber, type, id, zipcode, ticket, meta)

Process payment or settle a previous charge. *card **bank

Process payment or settle a previous charge. *card **bank

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ApiApi;


ApiApi apiInstance = new ApiApi();
String amount = "amount_example"; // String | The total transaction amount. This is the amount of funds to move on the card
String cc = "cc_example"; // String | Credit Card Number with or without dashes
String mm = "mm_example"; // String | 2 digit month
String yy = "yy_example"; // String | 2 digit year
String cvv = "cvv_example"; // String | Card Verification Value found on the card (CVV2, CVC2, CID)
String accountNumber = "accountNumber_example"; // String | Bank Account Number
String routingNumber = "routingNumber_example"; // String | Bank Routing Number
String type = "type_example"; // String | Options: checking, savings *default checking
String id = "id_example"; // String | Transaction ID used to settle an authorized payment method (cc or bank info then not required) *optional synonym: transactionId
String zipcode = "zipcode_example"; // String | Zip code. *optional synonym: zip
String ticket = "ticket_example"; // String | Ticket Number used by POS
Object meta = null; // Object | Optional user defined object to be returned with future response
try {
    List<Response> result = apiInstance.charge(amount, cc, mm, yy, cvv, accountNumber, routingNumber, type, id, zipcode, ticket, meta);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ApiApi#charge");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **String**| The total transaction amount. This is the amount of funds to move on the card |
 **cc** | **String**| Credit Card Number with or without dashes |
 **mm** | **String**| 2 digit month |
 **yy** | **String**| 2 digit year |
 **cvv** | **String**| Card Verification Value found on the card (CVV2, CVC2, CID) |
 **accountNumber** | **String**| Bank Account Number |
 **routingNumber** | **String**| Bank Routing Number |
 **type** | **String**| Options: checking, savings *default checking |
 **id** | **String**| Transaction ID used to settle an authorized payment method (cc or bank info then not required) *optional synonym: transactionId | [optional]
 **zipcode** | **String**| Zip code. *optional synonym: zip | [optional]
 **ticket** | **String**| Ticket Number used by POS | [optional]
 **meta** | [**Object**](.md)| Optional user defined object to be returned with future response | [optional]

### Return type

[**List&lt;Response&gt;**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="credit"></a>
# **credit**
> List&lt;Response&gt; credit(amount, cc, mm, yy, cvv, zipcode, ticket, meta)

A Credit transaction is used to refund a cardholder for a previous transaction.

A Credit transaction is used to refund a cardholder for a previous transaction.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ApiApi;


ApiApi apiInstance = new ApiApi();
String amount = "amount_example"; // String | The total transaction amount. This is the amount of funds to move on the card
String cc = "cc_example"; // String | Credit Card Number with or without dashes
String mm = "mm_example"; // String | 2 digit month
String yy = "yy_example"; // String | 2 digit year
String cvv = "cvv_example"; // String | Card Verification Value found on the card (CVV2, CVC2, CID)
String zipcode = "zipcode_example"; // String | Zip code. *optional synonym: zip
String ticket = "ticket_example"; // String | Ticket Number used by POS
Object meta = null; // Object | Optional user defined object to be returned with future response
try {
    List<Response> result = apiInstance.credit(amount, cc, mm, yy, cvv, zipcode, ticket, meta);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ApiApi#credit");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **String**| The total transaction amount. This is the amount of funds to move on the card |
 **cc** | **String**| Credit Card Number with or without dashes |
 **mm** | **String**| 2 digit month |
 **yy** | **String**| 2 digit year |
 **cvv** | **String**| Card Verification Value found on the card (CVV2, CVC2, CID) |
 **zipcode** | **String**| Zip code. *optional synonym: zip | [optional]
 **ticket** | **String**| Ticket Number used by POS | [optional]
 **meta** | [**Object**](.md)| Optional user defined object to be returned with future response | [optional]

### Return type

[**List&lt;Response&gt;**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="enroll"></a>
# **enroll**
> List&lt;Response&gt; enroll(dbaName, email, website, fedTxId, legalName, startDate, accountHolderName, accountType, accountNumber, routingNumber, ownershipType, businessDescription, businessPhoneNumber, businessAddress1, businessAddress2, businessCity, businessStateProvince, businessPostalCode, principleFirstName, principleLastName, principleSsn, principleDateOfBirth, principleAddressLine1, principleAddressLine2, principleCity, principleStateProvince, principlePostalCode, principleTitle, principleOwnershipPercentage, principlePhoneNumber, stockSymbol)

Enroll a new merchant or retrieve status of pending merchant.

Enroll a new merchant or retrieve status of pending merchant.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ApiApi;


ApiApi apiInstance = new ApiApi();
String dbaName = "dbaName_example"; // String | Doing Business As name. <code>*</code> Only field necessary for GET.
String email = "email_example"; // String | 
String website = "website_example"; // String | 
String fedTxId = "fedTxId_example"; // String | 
String legalName = "legalName_example"; // String | Legal Business Name
String startDate = "startDate_example"; // String | Business Start Date
String accountHolderName = "accountHolderName_example"; // String | 
String accountType = "accountType_example"; // String | 
String accountNumber = "accountNumber_example"; // String | Bank Account to deposit transactions. 
String routingNumber = "routingNumber_example"; // String | Bank Routing Number to deposit transactions.
String ownershipType = "ownershipType_example"; // String | [\"Sole Proprietor\", \"C-Corp Private\", \"C-Corp Public\", \"S-Corp Private\", \"S-Corp Public\", \"LLC Private\", \"LLC Public\", \"Not For Profit\", \"Partnership Private\", \"Partnership\", \"Government Agency\"]
String businessDescription = "businessDescription_example"; // String | 
String businessPhoneNumber = "businessPhoneNumber_example"; // String | 
String businessAddress1 = "businessAddress1_example"; // String | 
String businessAddress2 = "businessAddress2_example"; // String | 
String businessCity = "businessCity_example"; // String | 
String businessStateProvince = "businessStateProvince_example"; // String | 
String businessPostalCode = "businessPostalCode_example"; // String | 
String principleFirstName = "principleFirstName_example"; // String | Primary Owners First Name. Adding a number to the parameter allows for adding multiple principle owners. Example: <strong>2principle_first_name</strong>
String principleLastName = "principleLastName_example"; // String | Primary Owners Last Name.
String principleSsn = "principleSsn_example"; // String | Primary Owners Social Security Number
String principleDateOfBirth = "principleDateOfBirth_example"; // String | 
String principleAddressLine1 = "principleAddressLine1_example"; // String | 
String principleAddressLine2 = "principleAddressLine2_example"; // String | 
String principleCity = "principleCity_example"; // String | 
String principleStateProvince = "principleStateProvince_example"; // String | 
String principlePostalCode = "principlePostalCode_example"; // String | 
String principleTitle = "principleTitle_example"; // String | 
String principleOwnershipPercentage = "principleOwnershipPercentage_example"; // String | 
String principlePhoneNumber = "principlePhoneNumber_example"; // String | 
String stockSymbol = "stockSymbol_example"; // String | 
try {
    List<Response> result = apiInstance.enroll(dbaName, email, website, fedTxId, legalName, startDate, accountHolderName, accountType, accountNumber, routingNumber, ownershipType, businessDescription, businessPhoneNumber, businessAddress1, businessAddress2, businessCity, businessStateProvince, businessPostalCode, principleFirstName, principleLastName, principleSsn, principleDateOfBirth, principleAddressLine1, principleAddressLine2, principleCity, principleStateProvince, principlePostalCode, principleTitle, principleOwnershipPercentage, principlePhoneNumber, stockSymbol);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ApiApi#enroll");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dbaName** | **String**| Doing Business As name. &lt;code&gt;*&lt;/code&gt; Only field necessary for GET. |
 **email** | **String**|  |
 **website** | **String**|  |
 **fedTxId** | **String**|  |
 **legalName** | **String**| Legal Business Name |
 **startDate** | **String**| Business Start Date |
 **accountHolderName** | **String**|  |
 **accountType** | **String**|  |
 **accountNumber** | **String**| Bank Account to deposit transactions.  |
 **routingNumber** | **String**| Bank Routing Number to deposit transactions. |
 **ownershipType** | **String**| [\&quot;Sole Proprietor\&quot;, \&quot;C-Corp Private\&quot;, \&quot;C-Corp Public\&quot;, \&quot;S-Corp Private\&quot;, \&quot;S-Corp Public\&quot;, \&quot;LLC Private\&quot;, \&quot;LLC Public\&quot;, \&quot;Not For Profit\&quot;, \&quot;Partnership Private\&quot;, \&quot;Partnership\&quot;, \&quot;Government Agency\&quot;] |
 **businessDescription** | **String**|  |
 **businessPhoneNumber** | **String**|  |
 **businessAddress1** | **String**|  |
 **businessAddress2** | **String**|  |
 **businessCity** | **String**|  |
 **businessStateProvince** | **String**|  |
 **businessPostalCode** | **String**|  |
 **principleFirstName** | **String**| Primary Owners First Name. Adding a number to the parameter allows for adding multiple principle owners. Example: &lt;strong&gt;2principle_first_name&lt;/strong&gt; |
 **principleLastName** | **String**| Primary Owners Last Name. |
 **principleSsn** | **String**| Primary Owners Social Security Number |
 **principleDateOfBirth** | **String**|  |
 **principleAddressLine1** | **String**|  |
 **principleAddressLine2** | **String**|  |
 **principleCity** | **String**|  |
 **principleStateProvince** | **String**|  |
 **principlePostalCode** | **String**|  |
 **principleTitle** | **String**|  |
 **principleOwnershipPercentage** | **String**|  |
 **principlePhoneNumber** | **String**|  |
 **stockSymbol** | **String**|  | [optional]

### Return type

[**List&lt;Response&gt;**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="report"></a>
# **report**
> List&lt;Response&gt; report(start, end, dates)

Get transaction detail history

Get transaction detail history

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ApiApi;


ApiApi apiInstance = new ApiApi();
String start = "start_example"; // String | Start of date range YYYY-MM-DD **defaults to that day
String end = "end_example"; // String | End of date range YYYY-MM-DD
String dates = "dates_example"; // String | Optional list of range, example: [\"YYYY-MM-DD\",\"YYYY-MM-DD\"]
try {
    List<Response> result = apiInstance.report(start, end, dates);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ApiApi#report");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **String**| Start of date range YYYY-MM-DD **defaults to that day | [optional]
 **end** | **String**| End of date range YYYY-MM-DD | [optional]
 **dates** | **String**| Optional list of range, example: [\&quot;YYYY-MM-DD\&quot;,\&quot;YYYY-MM-DD\&quot;] | [optional]

### Return type

[**List&lt;Response&gt;**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="settle"></a>
# **settle**
> List&lt;Response&gt; settle(id, ticket, meta)

Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.

Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ApiApi;


ApiApi apiInstance = new ApiApi();
String id = "id_example"; // String | Transaction ID of charged event. *optional synonym: transactionId
String ticket = "ticket_example"; // String | Ticket Number used by POS
Object meta = null; // Object | Optional user defined object to be returned with future response
try {
    List<Response> result = apiInstance.settle(id, ticket, meta);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ApiApi#settle");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Transaction ID of charged event. *optional synonym: transactionId |
 **ticket** | **String**| Ticket Number used by POS | [optional]
 **meta** | [**Object**](.md)| Optional user defined object to be returned with future response | [optional]

### Return type

[**List&lt;Response&gt;**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="tokenize"></a>
# **tokenize**
> List&lt;Response&gt; tokenize(cc, mm, yy, cvv)

Create a token for later use.

Create a token for later use.

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.ApiApi;


ApiApi apiInstance = new ApiApi();
String cc = "cc_example"; // String | Credit Card Number with or without dashes
String mm = "mm_example"; // String | 2 digit Month
String yy = "yy_example"; // String | 2 digit Year
String cvv = "cvv_example"; // String | Card Verification Value found on the card (CVV2, CVC2, CID)
try {
    List<Response> result = apiInstance.tokenize(cc, mm, yy, cvv);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ApiApi#tokenize");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cc** | **String**| Credit Card Number with or without dashes |
 **mm** | **String**| 2 digit Month |
 **yy** | **String**| 2 digit Year |
 **cvv** | **String**| Card Verification Value found on the card (CVV2, CVC2, CID) |

### Return type

[**List&lt;Response&gt;**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


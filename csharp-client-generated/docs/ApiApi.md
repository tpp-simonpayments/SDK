# IO.Swagger.Api.ApiApi

All URIs are relative to *https://virtserver.swaggerhub.com/TriplePlayPay/payment/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Authorize**](ApiApi.md#authorize) | **POST** /authorize | Used to verify funds when the total amount of the purchase is unknown.
[**CallVoid**](ApiApi.md#callvoid) | **POST** /void | A Void transaction can be used to back out a previous Sale transaction.
[**Charge**](ApiApi.md#charge) | **POST** /charge | Charge a credit card or settle a previous charge.
[**Credit**](ApiApi.md#credit) | **POST** /credit | A Credit transaction is used to refund a cardholder for a previous transaction.
[**Enroll**](ApiApi.md#enroll) | **POST** /enroll | Enroll a new merchant or retrieve status of pending merchant.
[**Settle**](ApiApi.md#settle) | **POST** /settle | Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.
[**Tokenize**](ApiApi.md#tokenize) | **POST** /tokenize | Create a token for later use.

<a name="authorize"></a>
# **Authorize**
> List<Response> Authorize (string amount, string cc, string mm, string yy, string cvv, string ticket = null, Object meta = null)

Used to verify funds when the total amount of the purchase is unknown.

Used to verify funds when the total amount of the purchase is unknown.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class AuthorizeExample
    {
        public void main()
        {
            var apiInstance = new ApiApi();
            var amount = amount_example;  // string | The total transaction amount. This is the amount of funds to move on the card
            var cc = cc_example;  // string | Credit Card Number with or without dashes
            var mm = mm_example;  // string | 2 digit Month
            var yy = yy_example;  // string | 2 digit Year
            var cvv = cvv_example;  // string | Card Verification Value found on the card (CVV2, CVC2, CID)
            var ticket = ticket_example;  // string | Ticket Number used by POS (optional) 
            var meta = new Object(); // Object | Optional user defined object to be returned with future response (optional) 

            try
            {
                // Used to verify funds when the total amount of the purchase is unknown.
                List&lt;Response&gt; result = apiInstance.Authorize(amount, cc, mm, yy, cvv, ticket, meta);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ApiApi.Authorize: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **string**| The total transaction amount. This is the amount of funds to move on the card | 
 **cc** | **string**| Credit Card Number with or without dashes | 
 **mm** | **string**| 2 digit Month | 
 **yy** | **string**| 2 digit Year | 
 **cvv** | **string**| Card Verification Value found on the card (CVV2, CVC2, CID) | 
 **ticket** | **string**| Ticket Number used by POS | [optional] 
 **meta** | [**Object**](Object.md)| Optional user defined object to be returned with future response | [optional] 

### Return type

[**List<Response>**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="callvoid"></a>
# **CallVoid**
> List<Response> CallVoid (string transactionId, string ticket = null, Object meta = null)

A Void transaction can be used to back out a previous Sale transaction.

A Void transaction can be used to back out a previous Sale transaction.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class CallVoidExample
    {
        public void main()
        {
            var apiInstance = new ApiApi();
            var transactionId = transactionId_example;  // string | Transaction ID of charged event.
            var ticket = ticket_example;  // string | Ticket Number used by POS (optional) 
            var meta = new Object(); // Object | Optional user defined object to be returned with future response (optional) 

            try
            {
                // A Void transaction can be used to back out a previous Sale transaction.
                List&lt;Response&gt; result = apiInstance.CallVoid(transactionId, ticket, meta);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ApiApi.CallVoid: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **string**| Transaction ID of charged event. | 
 **ticket** | **string**| Ticket Number used by POS | [optional] 
 **meta** | [**Object**](Object.md)| Optional user defined object to be returned with future response | [optional] 

### Return type

[**List<Response>**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="charge"></a>
# **Charge**
> List<Response> Charge (string amount, string transactionId, string cc, string mm, string yy, string cvv, string ticket = null, Object meta = null)

Charge a credit card or settle a previous charge.

Charge a credit card or settle a previous charge.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ChargeExample
    {
        public void main()
        {
            var apiInstance = new ApiApi();
            var amount = amount_example;  // string | The total transaction amount. This is the amount of funds to move on the card
            var transactionId = transactionId_example;  // string | Transaction ID used to settle an authorized card (cc info then not required)
            var cc = cc_example;  // string | Credit Card Number with or without dashes
            var mm = mm_example;  // string | 2 digit month
            var yy = yy_example;  // string | 2 digit year
            var cvv = cvv_example;  // string | Card Verification Value found on the card (CVV2, CVC2, CID)
            var ticket = ticket_example;  // string | Ticket Number used by POS (optional) 
            var meta = new Object(); // Object | Optional user defined object to be returned with future response (optional) 

            try
            {
                // Charge a credit card or settle a previous charge.
                List&lt;Response&gt; result = apiInstance.Charge(amount, transactionId, cc, mm, yy, cvv, ticket, meta);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ApiApi.Charge: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **string**| The total transaction amount. This is the amount of funds to move on the card | 
 **transactionId** | **string**| Transaction ID used to settle an authorized card (cc info then not required) | 
 **cc** | **string**| Credit Card Number with or without dashes | 
 **mm** | **string**| 2 digit month | 
 **yy** | **string**| 2 digit year | 
 **cvv** | **string**| Card Verification Value found on the card (CVV2, CVC2, CID) | 
 **ticket** | **string**| Ticket Number used by POS | [optional] 
 **meta** | [**Object**](Object.md)| Optional user defined object to be returned with future response | [optional] 

### Return type

[**List<Response>**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="credit"></a>
# **Credit**
> List<Response> Credit (string amount, string cc, string mm, string yy, string cvv, string ticket = null, Object meta = null)

A Credit transaction is used to refund a cardholder for a previous transaction.

A Credit transaction is used to refund a cardholder for a previous transaction.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class CreditExample
    {
        public void main()
        {
            var apiInstance = new ApiApi();
            var amount = amount_example;  // string | The total transaction amount. This is the amount of funds to move on the card
            var cc = cc_example;  // string | Credit Card Number with or without dashes
            var mm = mm_example;  // string | 2 digit month
            var yy = yy_example;  // string | 2 digit year
            var cvv = cvv_example;  // string | Card Verification Value found on the card (CVV2, CVC2, CID)
            var ticket = ticket_example;  // string | Ticket Number used by POS (optional) 
            var meta = new Object(); // Object | Optional user defined object to be returned with future response (optional) 

            try
            {
                // A Credit transaction is used to refund a cardholder for a previous transaction.
                List&lt;Response&gt; result = apiInstance.Credit(amount, cc, mm, yy, cvv, ticket, meta);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ApiApi.Credit: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **string**| The total transaction amount. This is the amount of funds to move on the card | 
 **cc** | **string**| Credit Card Number with or without dashes | 
 **mm** | **string**| 2 digit month | 
 **yy** | **string**| 2 digit year | 
 **cvv** | **string**| Card Verification Value found on the card (CVV2, CVC2, CID) | 
 **ticket** | **string**| Ticket Number used by POS | [optional] 
 **meta** | [**Object**](Object.md)| Optional user defined object to be returned with future response | [optional] 

### Return type

[**List<Response>**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="enroll"></a>
# **Enroll**
> List<Response> Enroll (string dbaName, string email, string website, string fedTxId, string legalName, string startDate, string accountHolderName, string accountType, string accountNumber, string routingNumber, List<string> ownershipType, string businessDescription, string businessPhoneNumber, string businessAddress1, string businessAddress2, string businessCity, string businessStateProvince, string businessPostalCode, string principleFirstName, string principleLastName, string principleSsn, string principleDateOfBirth, string principleAddressLine1, string principleAddressLine2, string principleCity, string principleStateProvince, string principlePostalCode, string principleTitle, string principleOwnershipPercentage, string principlePhoneNumber, string stockSymbol = null)

Enroll a new merchant or retrieve status of pending merchant.

Enroll a new merchant or retrieve status of pending merchant.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class EnrollExample
    {
        public void main()
        {
            var apiInstance = new ApiApi();
            var dbaName = dbaName_example;  // string | Doing Business As name. <code>*</code> Only field necessary for GET.
            var email = email_example;  // string | 
            var website = website_example;  // string | 
            var fedTxId = fedTxId_example;  // string | 
            var legalName = legalName_example;  // string | Legal Business Name
            var startDate = startDate_example;  // string | Business Start Date
            var accountHolderName = accountHolderName_example;  // string | 
            var accountType = accountType_example;  // string | 
            var accountNumber = accountNumber_example;  // string | Bank Account to deposit transactions. 
            var routingNumber = routingNumber_example;  // string | Bank Routing Number to deposit transactions.
            var ownershipType = new List<string>(); // List<string> | Select an ownership type:
            var businessDescription = businessDescription_example;  // string | 
            var businessPhoneNumber = businessPhoneNumber_example;  // string | 
            var businessAddress1 = businessAddress1_example;  // string | 
            var businessAddress2 = businessAddress2_example;  // string | 
            var businessCity = businessCity_example;  // string | 
            var businessStateProvince = businessStateProvince_example;  // string | 
            var businessPostalCode = businessPostalCode_example;  // string | 
            var principleFirstName = principleFirstName_example;  // string | Primary Owners First Name. Adding a number to the parameter allows for adding multiple principle owners. Example: <strong>2principle_first_name</strong>
            var principleLastName = principleLastName_example;  // string | Primary Owners Last Name.
            var principleSsn = principleSsn_example;  // string | Primary Owners Social Security Number
            var principleDateOfBirth = principleDateOfBirth_example;  // string | 
            var principleAddressLine1 = principleAddressLine1_example;  // string | 
            var principleAddressLine2 = principleAddressLine2_example;  // string | 
            var principleCity = principleCity_example;  // string | 
            var principleStateProvince = principleStateProvince_example;  // string | 
            var principlePostalCode = principlePostalCode_example;  // string | 
            var principleTitle = principleTitle_example;  // string | 
            var principleOwnershipPercentage = principleOwnershipPercentage_example;  // string | 
            var principlePhoneNumber = principlePhoneNumber_example;  // string | 
            var stockSymbol = stockSymbol_example;  // string |  (optional) 

            try
            {
                // Enroll a new merchant or retrieve status of pending merchant.
                List&lt;Response&gt; result = apiInstance.Enroll(dbaName, email, website, fedTxId, legalName, startDate, accountHolderName, accountType, accountNumber, routingNumber, ownershipType, businessDescription, businessPhoneNumber, businessAddress1, businessAddress2, businessCity, businessStateProvince, businessPostalCode, principleFirstName, principleLastName, principleSsn, principleDateOfBirth, principleAddressLine1, principleAddressLine2, principleCity, principleStateProvince, principlePostalCode, principleTitle, principleOwnershipPercentage, principlePhoneNumber, stockSymbol);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ApiApi.Enroll: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dbaName** | **string**| Doing Business As name. &lt;code&gt;*&lt;/code&gt; Only field necessary for GET. | 
 **email** | **string**|  | 
 **website** | **string**|  | 
 **fedTxId** | **string**|  | 
 **legalName** | **string**| Legal Business Name | 
 **startDate** | **string**| Business Start Date | 
 **accountHolderName** | **string**|  | 
 **accountType** | **string**|  | 
 **accountNumber** | **string**| Bank Account to deposit transactions.  | 
 **routingNumber** | **string**| Bank Routing Number to deposit transactions. | 
 **ownershipType** | [**List&lt;string&gt;**](string.md)| Select an ownership type: | 
 **businessDescription** | **string**|  | 
 **businessPhoneNumber** | **string**|  | 
 **businessAddress1** | **string**|  | 
 **businessAddress2** | **string**|  | 
 **businessCity** | **string**|  | 
 **businessStateProvince** | **string**|  | 
 **businessPostalCode** | **string**|  | 
 **principleFirstName** | **string**| Primary Owners First Name. Adding a number to the parameter allows for adding multiple principle owners. Example: &lt;strong&gt;2principle_first_name&lt;/strong&gt; | 
 **principleLastName** | **string**| Primary Owners Last Name. | 
 **principleSsn** | **string**| Primary Owners Social Security Number | 
 **principleDateOfBirth** | **string**|  | 
 **principleAddressLine1** | **string**|  | 
 **principleAddressLine2** | **string**|  | 
 **principleCity** | **string**|  | 
 **principleStateProvince** | **string**|  | 
 **principlePostalCode** | **string**|  | 
 **principleTitle** | **string**|  | 
 **principleOwnershipPercentage** | **string**|  | 
 **principlePhoneNumber** | **string**|  | 
 **stockSymbol** | **string**|  | [optional] 

### Return type

[**List<Response>**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="settle"></a>
# **Settle**
> List<Response> Settle (string transactionId, string ticket = null, Object meta = null)

Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.

Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class SettleExample
    {
        public void main()
        {
            var apiInstance = new ApiApi();
            var transactionId = transactionId_example;  // string | Transaction ID of charged event.
            var ticket = ticket_example;  // string | Ticket Number used by POS (optional) 
            var meta = new Object(); // Object | Optional user defined object to be returned with future response (optional) 

            try
            {
                // Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.
                List&lt;Response&gt; result = apiInstance.Settle(transactionId, ticket, meta);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ApiApi.Settle: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **string**| Transaction ID of charged event. | 
 **ticket** | **string**| Ticket Number used by POS | [optional] 
 **meta** | [**Object**](Object.md)| Optional user defined object to be returned with future response | [optional] 

### Return type

[**List<Response>**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="tokenize"></a>
# **Tokenize**
> List<Response> Tokenize (string cc, string mm, string yy, string cvv)

Create a token for later use.

Create a token for later use.

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TokenizeExample
    {
        public void main()
        {
            var apiInstance = new ApiApi();
            var cc = cc_example;  // string | Credit Card Number with or without dashes
            var mm = mm_example;  // string | 2 digit Month
            var yy = yy_example;  // string | 2 digit Year
            var cvv = cvv_example;  // string | Card Verification Value found on the card (CVV2, CVC2, CID)

            try
            {
                // Create a token for later use.
                List&lt;Response&gt; result = apiInstance.Tokenize(cc, mm, yy, cvv);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling ApiApi.Tokenize: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cc** | **string**| Credit Card Number with or without dashes | 
 **mm** | **string**| 2 digit Month | 
 **yy** | **string**| 2 digit Year | 
 **cvv** | **string**| Card Verification Value found on the card (CVV2, CVC2, CID) | 

### Return type

[**List<Response>**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

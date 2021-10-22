# {{classname}}

All URIs are relative to *https://virtserver.swaggerhub.com/TriplePlayPay/payment/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Authorize**](ApiApi.md#Authorize) | **Post** /authorize | Used to verify funds when the total amount of the purchase is unknown.
[**Charge**](ApiApi.md#Charge) | **Post** /charge | Charge a credit card or settle a previous charge.
[**Credit**](ApiApi.md#Credit) | **Post** /credit | A Credit transaction is used to refund a cardholder for a previous transaction.
[**Enroll**](ApiApi.md#Enroll) | **Post** /enroll | Enroll a new merchant or retrieve status of pending merchant.
[**Settle**](ApiApi.md#Settle) | **Post** /settle | Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.
[**Tokenize**](ApiApi.md#Tokenize) | **Post** /tokenize | Create a token for later use.
[**Void**](ApiApi.md#Void) | **Post** /void | A Void transaction can be used to back out a previous Sale transaction.

# **Authorize**
> []Response Authorize(ctx, amount, cc, mm, yy, cvv, optional)
Used to verify funds when the total amount of the purchase is unknown.

Used to verify funds when the total amount of the purchase is unknown.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **amount** | **string**| The total transaction amount. This is the amount of funds to move on the card | 
  **cc** | **string**| Credit Card Number with or without dashes | 
  **mm** | **string**| 2 digit Month | 
  **yy** | **string**| 2 digit Year | 
  **cvv** | **string**| Card Verification Value found on the card (CVV2, CVC2, CID) | 
 **optional** | ***ApiApiAuthorizeOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ApiApiAuthorizeOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------





 **ticket** | **optional.String**| Ticket Number used by POS | 
 **meta** | [**optional.Interface of interface{}**](.md)| Optional user defined object to be returned with future response | 

### Return type

[**[]Response**](response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Charge**
> []Response Charge(ctx, amount, transactionId, cc, mm, yy, cvv, optional)
Charge a credit card or settle a previous charge.

Charge a credit card or settle a previous charge.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **amount** | **string**| The total transaction amount. This is the amount of funds to move on the card | 
  **transactionId** | **string**| Transaction ID used to settle an authorized card (cc info then not required) | 
  **cc** | **string**| Credit Card Number with or without dashes | 
  **mm** | **string**| 2 digit month | 
  **yy** | **string**| 2 digit year | 
  **cvv** | **string**| Card Verification Value found on the card (CVV2, CVC2, CID) | 
 **optional** | ***ApiApiChargeOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ApiApiChargeOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------






 **ticket** | **optional.String**| Ticket Number used by POS | 
 **meta** | [**optional.Interface of interface{}**](.md)| Optional user defined object to be returned with future response | 

### Return type

[**[]Response**](response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Credit**
> []Response Credit(ctx, amount, cc, mm, yy, cvv, optional)
A Credit transaction is used to refund a cardholder for a previous transaction.

A Credit transaction is used to refund a cardholder for a previous transaction.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **amount** | **string**| The total transaction amount. This is the amount of funds to move on the card | 
  **cc** | **string**| Credit Card Number with or without dashes | 
  **mm** | **string**| 2 digit month | 
  **yy** | **string**| 2 digit year | 
  **cvv** | **string**| Card Verification Value found on the card (CVV2, CVC2, CID) | 
 **optional** | ***ApiApiCreditOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ApiApiCreditOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------





 **ticket** | **optional.String**| Ticket Number used by POS | 
 **meta** | [**optional.Interface of interface{}**](.md)| Optional user defined object to be returned with future response | 

### Return type

[**[]Response**](response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Enroll**
> []Response Enroll(ctx, dbaName, email, website, fedTxId, legalName, startDate, accountHolderName, accountType, accountNumber, routingNumber, ownershipType, businessDescription, businessPhoneNumber, businessAddress1, businessAddress2, businessCity, businessStateProvince, businessPostalCode, principleFirstName, principleLastName, principleSsn, principleDateOfBirth, principleAddressLine1, principleAddressLine2, principleCity, principleStateProvince, principlePostalCode, principleTitle, principleOwnershipPercentage, principlePhoneNumber, optional)
Enroll a new merchant or retrieve status of pending merchant.

Enroll a new merchant or retrieve status of pending merchant.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
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
  **ownershipType** | [**[]string**](string.md)| Select an ownership type: | 
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
 **optional** | ***ApiApiEnrollOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ApiApiEnrollOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------






























 **stockSymbol** | **optional.String**|  | 

### Return type

[**[]Response**](response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Settle**
> []Response Settle(ctx, transactionId, optional)
Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.

Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **transactionId** | **string**| Transaction ID of charged event. | 
 **optional** | ***ApiApiSettleOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ApiApiSettleOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **ticket** | **optional.String**| Ticket Number used by POS | 
 **meta** | [**optional.Interface of interface{}**](.md)| Optional user defined object to be returned with future response | 

### Return type

[**[]Response**](response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Tokenize**
> []Response Tokenize(ctx, cc, mm, yy, cvv)
Create a token for later use.

Create a token for later use.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **cc** | **string**| Credit Card Number with or without dashes | 
  **mm** | **string**| 2 digit Month | 
  **yy** | **string**| 2 digit Year | 
  **cvv** | **string**| Card Verification Value found on the card (CVV2, CVC2, CID) | 

### Return type

[**[]Response**](response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Void**
> []Response Void(ctx, transactionId, optional)
A Void transaction can be used to back out a previous Sale transaction.

A Void transaction can be used to back out a previous Sale transaction.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **transactionId** | **string**| Transaction ID of charged event. | 
 **optional** | ***ApiApiVoidOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ApiApiVoidOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **ticket** | **optional.String**| Ticket Number used by POS | 
 **meta** | [**optional.Interface of interface{}**](.md)| Optional user defined object to be returned with future response | 

### Return type

[**[]Response**](response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# Swagger\Client\ApiApi

All URIs are relative to *https://virtserver.swaggerhub.com/TriplePlayPay/payment/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize**](ApiApi.md#authorize) | **POST** /authorize | Used to verify funds when the total amount of the purchase is unknown.
[**charge**](ApiApi.md#charge) | **POST** /charge | Charge a credit card or settle a previous charge.
[**credit**](ApiApi.md#credit) | **POST** /credit | A Credit transaction is used to refund a cardholder for a previous transaction.
[**enroll**](ApiApi.md#enroll) | **POST** /enroll | Enroll a new merchant or retrieve status of pending merchant.
[**settle**](ApiApi.md#settle) | **POST** /settle | Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.
[**tokenize**](ApiApi.md#tokenize) | **POST** /tokenize | Create a token for later use.
[**void**](ApiApi.md#void) | **POST** /void | A Void transaction can be used to back out a previous Sale transaction.

# **authorize**
> \Swagger\Client\Model\Response[] authorize($amount, $cc, $mm, $yy, $cvv, $ticket, $meta)

Used to verify funds when the total amount of the purchase is unknown.

Used to verify funds when the total amount of the purchase is unknown.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ApiApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amount = "amount_example"; // string | The total transaction amount. This is the amount of funds to move on the card
$cc = "cc_example"; // string | Credit Card Number with or without dashes
$mm = "mm_example"; // string | 2 digit Month
$yy = "yy_example"; // string | 2 digit Year
$cvv = "cvv_example"; // string | Card Verification Value found on the card (CVV2, CVC2, CID)
$ticket = "ticket_example"; // string | Ticket Number used by POS
$meta = new \stdClass; // object | Optional user defined object to be returned with future response

try {
    $result = $apiInstance->authorize($amount, $cc, $mm, $yy, $cvv, $ticket, $meta);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApiApi->authorize: ', $e->getMessage(), PHP_EOL;
}
?>
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
 **meta** | [**object**](../Model/.md)| Optional user defined object to be returned with future response | [optional]

### Return type

[**\Swagger\Client\Model\Response[]**](../Model/Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **charge**
> \Swagger\Client\Model\Response[] charge($amount, $transaction_id, $cc, $mm, $yy, $cvv, $ticket, $meta)

Charge a credit card or settle a previous charge.

Charge a credit card or settle a previous charge.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ApiApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amount = "amount_example"; // string | The total transaction amount. This is the amount of funds to move on the card
$transaction_id = "transaction_id_example"; // string | Transaction ID used to settle an authorized card (cc info then not required)
$cc = "cc_example"; // string | Credit Card Number with or without dashes
$mm = "mm_example"; // string | 2 digit month
$yy = "yy_example"; // string | 2 digit year
$cvv = "cvv_example"; // string | Card Verification Value found on the card (CVV2, CVC2, CID)
$ticket = "ticket_example"; // string | Ticket Number used by POS
$meta = new \stdClass; // object | Optional user defined object to be returned with future response

try {
    $result = $apiInstance->charge($amount, $transaction_id, $cc, $mm, $yy, $cvv, $ticket, $meta);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApiApi->charge: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **string**| The total transaction amount. This is the amount of funds to move on the card |
 **transaction_id** | **string**| Transaction ID used to settle an authorized card (cc info then not required) |
 **cc** | **string**| Credit Card Number with or without dashes |
 **mm** | **string**| 2 digit month |
 **yy** | **string**| 2 digit year |
 **cvv** | **string**| Card Verification Value found on the card (CVV2, CVC2, CID) |
 **ticket** | **string**| Ticket Number used by POS | [optional]
 **meta** | [**object**](../Model/.md)| Optional user defined object to be returned with future response | [optional]

### Return type

[**\Swagger\Client\Model\Response[]**](../Model/Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **credit**
> \Swagger\Client\Model\Response[] credit($amount, $cc, $mm, $yy, $cvv, $ticket, $meta)

A Credit transaction is used to refund a cardholder for a previous transaction.

A Credit transaction is used to refund a cardholder for a previous transaction.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ApiApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$amount = "amount_example"; // string | The total transaction amount. This is the amount of funds to move on the card
$cc = "cc_example"; // string | Credit Card Number with or without dashes
$mm = "mm_example"; // string | 2 digit month
$yy = "yy_example"; // string | 2 digit year
$cvv = "cvv_example"; // string | Card Verification Value found on the card (CVV2, CVC2, CID)
$ticket = "ticket_example"; // string | Ticket Number used by POS
$meta = new \stdClass; // object | Optional user defined object to be returned with future response

try {
    $result = $apiInstance->credit($amount, $cc, $mm, $yy, $cvv, $ticket, $meta);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApiApi->credit: ', $e->getMessage(), PHP_EOL;
}
?>
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
 **meta** | [**object**](../Model/.md)| Optional user defined object to be returned with future response | [optional]

### Return type

[**\Swagger\Client\Model\Response[]**](../Model/Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **enroll**
> \Swagger\Client\Model\Response[] enroll($dba_name, $email, $website, $fed_tx_id, $legal_name, $start_date, $account_holder_name, $account_type, $account_number, $routing_number, $ownership_type, $business_description, $business_phone_number, $business_address_1, $business_address_2, $business_city, $business_state_province, $business_postal_code, $principle_first_name, $principle_last_name, $principle_ssn, $principle_date_of_birth, $principle_address_line_1, $principle_address_line_2, $principle_city, $principle_state_province, $principle_postal_code, $principle_title, $principle_ownership_percentage, $principle_phone_number, $stock_symbol)

Enroll a new merchant or retrieve status of pending merchant.

Enroll a new merchant or retrieve status of pending merchant.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ApiApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$dba_name = "dba_name_example"; // string | Doing Business As name. <code>*</code> Only field necessary for GET.
$email = "email_example"; // string | 
$website = "website_example"; // string | 
$fed_tx_id = "fed_tx_id_example"; // string | 
$legal_name = "legal_name_example"; // string | Legal Business Name
$start_date = "start_date_example"; // string | Business Start Date
$account_holder_name = "account_holder_name_example"; // string | 
$account_type = "account_type_example"; // string | 
$account_number = "account_number_example"; // string | Bank Account to deposit transactions.
$routing_number = "routing_number_example"; // string | Bank Routing Number to deposit transactions.
$ownership_type = array("ownership_type_example"); // string[] | Select an ownership type:
$business_description = "business_description_example"; // string | 
$business_phone_number = "business_phone_number_example"; // string | 
$business_address_1 = "business_address_1_example"; // string | 
$business_address_2 = "business_address_2_example"; // string | 
$business_city = "business_city_example"; // string | 
$business_state_province = "business_state_province_example"; // string | 
$business_postal_code = "business_postal_code_example"; // string | 
$principle_first_name = "principle_first_name_example"; // string | Primary Owners First Name. Adding a number to the parameter allows for adding multiple principle owners. Example: <strong>2principle_first_name</strong>
$principle_last_name = "principle_last_name_example"; // string | Primary Owners Last Name.
$principle_ssn = "principle_ssn_example"; // string | Primary Owners Social Security Number
$principle_date_of_birth = "principle_date_of_birth_example"; // string | 
$principle_address_line_1 = "principle_address_line_1_example"; // string | 
$principle_address_line_2 = "principle_address_line_2_example"; // string | 
$principle_city = "principle_city_example"; // string | 
$principle_state_province = "principle_state_province_example"; // string | 
$principle_postal_code = "principle_postal_code_example"; // string | 
$principle_title = "principle_title_example"; // string | 
$principle_ownership_percentage = "principle_ownership_percentage_example"; // string | 
$principle_phone_number = "principle_phone_number_example"; // string | 
$stock_symbol = "stock_symbol_example"; // string | 

try {
    $result = $apiInstance->enroll($dba_name, $email, $website, $fed_tx_id, $legal_name, $start_date, $account_holder_name, $account_type, $account_number, $routing_number, $ownership_type, $business_description, $business_phone_number, $business_address_1, $business_address_2, $business_city, $business_state_province, $business_postal_code, $principle_first_name, $principle_last_name, $principle_ssn, $principle_date_of_birth, $principle_address_line_1, $principle_address_line_2, $principle_city, $principle_state_province, $principle_postal_code, $principle_title, $principle_ownership_percentage, $principle_phone_number, $stock_symbol);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApiApi->enroll: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dba_name** | **string**| Doing Business As name. &lt;code&gt;*&lt;/code&gt; Only field necessary for GET. |
 **email** | **string**|  |
 **website** | **string**|  |
 **fed_tx_id** | **string**|  |
 **legal_name** | **string**| Legal Business Name |
 **start_date** | **string**| Business Start Date |
 **account_holder_name** | **string**|  |
 **account_type** | **string**|  |
 **account_number** | **string**| Bank Account to deposit transactions. |
 **routing_number** | **string**| Bank Routing Number to deposit transactions. |
 **ownership_type** | [**string[]**](../Model/string.md)| Select an ownership type: |
 **business_description** | **string**|  |
 **business_phone_number** | **string**|  |
 **business_address_1** | **string**|  |
 **business_address_2** | **string**|  |
 **business_city** | **string**|  |
 **business_state_province** | **string**|  |
 **business_postal_code** | **string**|  |
 **principle_first_name** | **string**| Primary Owners First Name. Adding a number to the parameter allows for adding multiple principle owners. Example: &lt;strong&gt;2principle_first_name&lt;/strong&gt; |
 **principle_last_name** | **string**| Primary Owners Last Name. |
 **principle_ssn** | **string**| Primary Owners Social Security Number |
 **principle_date_of_birth** | **string**|  |
 **principle_address_line_1** | **string**|  |
 **principle_address_line_2** | **string**|  |
 **principle_city** | **string**|  |
 **principle_state_province** | **string**|  |
 **principle_postal_code** | **string**|  |
 **principle_title** | **string**|  |
 **principle_ownership_percentage** | **string**|  |
 **principle_phone_number** | **string**|  |
 **stock_symbol** | **string**|  | [optional]

### Return type

[**\Swagger\Client\Model\Response[]**](../Model/Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **settle**
> \Swagger\Client\Model\Response[] settle($transaction_id, $ticket, $meta)

Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.

Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ApiApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$transaction_id = "transaction_id_example"; // string | Transaction ID of charged event.
$ticket = "ticket_example"; // string | Ticket Number used by POS
$meta = new \stdClass; // object | Optional user defined object to be returned with future response

try {
    $result = $apiInstance->settle($transaction_id, $ticket, $meta);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApiApi->settle: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **string**| Transaction ID of charged event. |
 **ticket** | **string**| Ticket Number used by POS | [optional]
 **meta** | [**object**](../Model/.md)| Optional user defined object to be returned with future response | [optional]

### Return type

[**\Swagger\Client\Model\Response[]**](../Model/Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **tokenize**
> \Swagger\Client\Model\Response[] tokenize($cc, $mm, $yy, $cvv)

Create a token for later use.

Create a token for later use.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ApiApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$cc = "cc_example"; // string | Credit Card Number with or without dashes
$mm = "mm_example"; // string | 2 digit Month
$yy = "yy_example"; // string | 2 digit Year
$cvv = "cvv_example"; // string | Card Verification Value found on the card (CVV2, CVC2, CID)

try {
    $result = $apiInstance->tokenize($cc, $mm, $yy, $cvv);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApiApi->tokenize: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cc** | **string**| Credit Card Number with or without dashes |
 **mm** | **string**| 2 digit Month |
 **yy** | **string**| 2 digit Year |
 **cvv** | **string**| Card Verification Value found on the card (CVV2, CVC2, CID) |

### Return type

[**\Swagger\Client\Model\Response[]**](../Model/Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **void**
> \Swagger\Client\Model\Response[] void($transaction_id, $ticket, $meta)

A Void transaction can be used to back out a previous Sale transaction.

A Void transaction can be used to back out a previous Sale transaction.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ApiApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$transaction_id = "transaction_id_example"; // string | Transaction ID of charged event.
$ticket = "ticket_example"; // string | Ticket Number used by POS
$meta = new \stdClass; // object | Optional user defined object to be returned with future response

try {
    $result = $apiInstance->void($transaction_id, $ticket, $meta);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApiApi->void: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **string**| Transaction ID of charged event. |
 **ticket** | **string**| Ticket Number used by POS | [optional]
 **meta** | [**object**](../Model/.md)| Optional user defined object to be returned with future response | [optional]

### Return type

[**\Swagger\Client\Model\Response[]**](../Model/Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)


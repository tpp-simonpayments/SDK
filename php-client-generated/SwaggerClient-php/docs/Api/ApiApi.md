# Swagger\Client\ApiApi

All URIs are relative to *https://virtserver.swaggerhub.com/TriplePlayPay/payment/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate**](ApiApi.md#activate) | **POST** /activate | Setup new Credit Card Terminal.
[**authorize**](ApiApi.md#authorize) | **POST** /authorize | Used to verify funds when the total amount of the purchase is unknown.
[**charge**](ApiApi.md#charge) | **POST** /charge | Process payment or settle a previous charge. *card **bank
[**credit**](ApiApi.md#credit) | **POST** /credit | A Credit transaction is used to refund a cardholder for a previous transaction.
[**enroll**](ApiApi.md#enroll) | **POST** /enroll | Enroll a new merchant or retrieve status of pending merchant.
[**report**](ApiApi.md#report) | **GET** /report | Get transaction detail history
[**settle**](ApiApi.md#settle) | **POST** /settle | Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.
[**tokenize**](ApiApi.md#tokenize) | **POST** /tokenize | Create a token for later use.
[**void**](ApiApi.md#void) | **POST** /void | A Void transaction can be used to back out a previous Sale transaction.

# **activate**
> \Swagger\Client\Model\Response[] activate($activation_code, $terminal_id, $meta)

Setup new Credit Card Terminal.

Setup new Credit Card Terminal.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ApiApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$activation_code = "activation_code_example"; // string | Activation Code on Terminal Screen
$terminal_id = "terminal_id_example"; // string | Custom Name of Terminal
$meta = new \stdClass; // object | Optional user defined object to be returned with future response

try {
    $result = $apiInstance->activate($activation_code, $terminal_id, $meta);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApiApi->activate: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activation_code** | **string**| Activation Code on Terminal Screen |
 **terminal_id** | **string**| Custom Name of Terminal |
 **meta** | [**object**](../Model/.md)| Optional user defined object to be returned with future response | [optional]

### Return type

[**\Swagger\Client\Model\Response[]**](../Model/Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **authorize**
> \Swagger\Client\Model\Response[] authorize($amount, $cc, $mm, $yy, $cvv, $zipcode, $ticket, $meta)

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
$zipcode = "zipcode_example"; // string | Zip code. *optional synonym: zip
$ticket = "ticket_example"; // string | Ticket Number used by POS
$meta = new \stdClass; // object | Optional user defined object to be returned with future response

try {
    $result = $apiInstance->authorize($amount, $cc, $mm, $yy, $cvv, $zipcode, $ticket, $meta);
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
 **zipcode** | **string**| Zip code. *optional synonym: zip | [optional]
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
> \Swagger\Client\Model\Response[] charge($amount, $cc, $mm, $yy, $cvv, $account_number, $routing_number, $type, $id, $zipcode, $ticket, $meta)

Process payment or settle a previous charge. *card **bank

Process payment or settle a previous charge. *card **bank

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
$account_number = "account_number_example"; // string | Bank Account Number
$routing_number = "routing_number_example"; // string | Bank Routing Number
$type = "type_example"; // string | Options: checking, savings *default checking
$id = "id_example"; // string | Transaction ID used to settle an authorized payment method (cc or bank info then not required) *optional synonym: transactionId
$zipcode = "zipcode_example"; // string | Zip code. *optional synonym: zip
$ticket = "ticket_example"; // string | Ticket Number used by POS
$meta = new \stdClass; // object | Optional user defined object to be returned with future response

try {
    $result = $apiInstance->charge($amount, $cc, $mm, $yy, $cvv, $account_number, $routing_number, $type, $id, $zipcode, $ticket, $meta);
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
 **cc** | **string**| Credit Card Number with or without dashes |
 **mm** | **string**| 2 digit month |
 **yy** | **string**| 2 digit year |
 **cvv** | **string**| Card Verification Value found on the card (CVV2, CVC2, CID) |
 **account_number** | **string**| Bank Account Number |
 **routing_number** | **string**| Bank Routing Number |
 **type** | **string**| Options: checking, savings *default checking |
 **id** | **string**| Transaction ID used to settle an authorized payment method (cc or bank info then not required) *optional synonym: transactionId | [optional]
 **zipcode** | **string**| Zip code. *optional synonym: zip | [optional]
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
> \Swagger\Client\Model\Response[] credit($amount, $cc, $mm, $yy, $cvv, $zipcode, $ticket, $meta)

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
$zipcode = "zipcode_example"; // string | Zip code. *optional synonym: zip
$ticket = "ticket_example"; // string | Ticket Number used by POS
$meta = new \stdClass; // object | Optional user defined object to be returned with future response

try {
    $result = $apiInstance->credit($amount, $cc, $mm, $yy, $cvv, $zipcode, $ticket, $meta);
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
 **zipcode** | **string**| Zip code. *optional synonym: zip | [optional]
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
$ownership_type = "ownership_type_example"; // string | [\"Sole Proprietor\", \"C-Corp Private\", \"C-Corp Public\", \"S-Corp Private\", \"S-Corp Public\", \"LLC Private\", \"LLC Public\", \"Not For Profit\", \"Partnership Private\", \"Partnership\", \"Government Agency\"]
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
 **ownership_type** | **string**| [\&quot;Sole Proprietor\&quot;, \&quot;C-Corp Private\&quot;, \&quot;C-Corp Public\&quot;, \&quot;S-Corp Private\&quot;, \&quot;S-Corp Public\&quot;, \&quot;LLC Private\&quot;, \&quot;LLC Public\&quot;, \&quot;Not For Profit\&quot;, \&quot;Partnership Private\&quot;, \&quot;Partnership\&quot;, \&quot;Government Agency\&quot;] |
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

# **report**
> \Swagger\Client\Model\Response[] report($start, $end, $dates)

Get transaction detail history

Get transaction detail history

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ApiApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$start = "start_example"; // string | Start of date range YYYY-MM-DD **defaults to that day
$end = "end_example"; // string | End of date range YYYY-MM-DD
$dates = "dates_example"; // string | Optional list of range, example: [\"YYYY-MM-DD\",\"YYYY-MM-DD\"]

try {
    $result = $apiInstance->report($start, $end, $dates);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApiApi->report: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **string**| Start of date range YYYY-MM-DD **defaults to that day | [optional]
 **end** | **string**| End of date range YYYY-MM-DD | [optional]
 **dates** | **string**| Optional list of range, example: [\&quot;YYYY-MM-DD\&quot;,\&quot;YYYY-MM-DD\&quot;] | [optional]

### Return type

[**\Swagger\Client\Model\Response[]**](../Model/Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **settle**
> \Swagger\Client\Model\Response[] settle($id, $ticket, $meta)

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
$id = "id_example"; // string | Transaction ID of charged event. *optional synonym: transactionId
$ticket = "ticket_example"; // string | Ticket Number used by POS
$meta = new \stdClass; // object | Optional user defined object to be returned with future response

try {
    $result = $apiInstance->settle($id, $ticket, $meta);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApiApi->settle: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Transaction ID of charged event. *optional synonym: transactionId |
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
> \Swagger\Client\Model\Response[] void($id, $ticket, $meta)

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
$id = "id_example"; // string | Transaction ID of charged event. *optional synonym: transactionId
$ticket = "ticket_example"; // string | Ticket Number used by POS
$meta = new \stdClass; // object | Optional user defined object to be returned with future response

try {
    $result = $apiInstance->void($id, $ticket, $meta);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling ApiApi->void: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| Transaction ID of charged event. *optional synonym: transactionId |
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


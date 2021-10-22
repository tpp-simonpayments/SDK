# swagger_client.ApiApi

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
> list[Response] authorize(amount, cc, mm, yy, cvv, ticket=ticket, meta=meta)

Used to verify funds when the total amount of the purchase is unknown.

Used to verify funds when the total amount of the purchase is unknown.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ApiApi()
amount = 'amount_example' # str | The total transaction amount. This is the amount of funds to move on the card
cc = 'cc_example' # str | Credit Card Number with or without dashes
mm = 'mm_example' # str | 2 digit Month
yy = 'yy_example' # str | 2 digit Year
cvv = 'cvv_example' # str | Card Verification Value found on the card (CVV2, CVC2, CID)
ticket = 'ticket_example' # str | Ticket Number used by POS (optional)
meta = NULL # object | Optional user defined object to be returned with future response (optional)

try:
    # Used to verify funds when the total amount of the purchase is unknown.
    api_response = api_instance.authorize(amount, cc, mm, yy, cvv, ticket=ticket, meta=meta)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ApiApi->authorize: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **str**| The total transaction amount. This is the amount of funds to move on the card | 
 **cc** | **str**| Credit Card Number with or without dashes | 
 **mm** | **str**| 2 digit Month | 
 **yy** | **str**| 2 digit Year | 
 **cvv** | **str**| Card Verification Value found on the card (CVV2, CVC2, CID) | 
 **ticket** | **str**| Ticket Number used by POS | [optional] 
 **meta** | [**object**](.md)| Optional user defined object to be returned with future response | [optional] 

### Return type

[**list[Response]**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **charge**
> list[Response] charge(amount, transaction_id, cc, mm, yy, cvv, ticket=ticket, meta=meta)

Charge a credit card or settle a previous charge.

Charge a credit card or settle a previous charge.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ApiApi()
amount = 'amount_example' # str | The total transaction amount. This is the amount of funds to move on the card
transaction_id = 'transaction_id_example' # str | Transaction ID used to settle an authorized card (cc info then not required)
cc = 'cc_example' # str | Credit Card Number with or without dashes
mm = 'mm_example' # str | 2 digit month
yy = 'yy_example' # str | 2 digit year
cvv = 'cvv_example' # str | Card Verification Value found on the card (CVV2, CVC2, CID)
ticket = 'ticket_example' # str | Ticket Number used by POS (optional)
meta = NULL # object | Optional user defined object to be returned with future response (optional)

try:
    # Charge a credit card or settle a previous charge.
    api_response = api_instance.charge(amount, transaction_id, cc, mm, yy, cvv, ticket=ticket, meta=meta)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ApiApi->charge: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **str**| The total transaction amount. This is the amount of funds to move on the card | 
 **transaction_id** | **str**| Transaction ID used to settle an authorized card (cc info then not required) | 
 **cc** | **str**| Credit Card Number with or without dashes | 
 **mm** | **str**| 2 digit month | 
 **yy** | **str**| 2 digit year | 
 **cvv** | **str**| Card Verification Value found on the card (CVV2, CVC2, CID) | 
 **ticket** | **str**| Ticket Number used by POS | [optional] 
 **meta** | [**object**](.md)| Optional user defined object to be returned with future response | [optional] 

### Return type

[**list[Response]**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **credit**
> list[Response] credit(amount, cc, mm, yy, cvv, ticket=ticket, meta=meta)

A Credit transaction is used to refund a cardholder for a previous transaction.

A Credit transaction is used to refund a cardholder for a previous transaction.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ApiApi()
amount = 'amount_example' # str | The total transaction amount. This is the amount of funds to move on the card
cc = 'cc_example' # str | Credit Card Number with or without dashes
mm = 'mm_example' # str | 2 digit month
yy = 'yy_example' # str | 2 digit year
cvv = 'cvv_example' # str | Card Verification Value found on the card (CVV2, CVC2, CID)
ticket = 'ticket_example' # str | Ticket Number used by POS (optional)
meta = NULL # object | Optional user defined object to be returned with future response (optional)

try:
    # A Credit transaction is used to refund a cardholder for a previous transaction.
    api_response = api_instance.credit(amount, cc, mm, yy, cvv, ticket=ticket, meta=meta)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ApiApi->credit: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amount** | **str**| The total transaction amount. This is the amount of funds to move on the card | 
 **cc** | **str**| Credit Card Number with or without dashes | 
 **mm** | **str**| 2 digit month | 
 **yy** | **str**| 2 digit year | 
 **cvv** | **str**| Card Verification Value found on the card (CVV2, CVC2, CID) | 
 **ticket** | **str**| Ticket Number used by POS | [optional] 
 **meta** | [**object**](.md)| Optional user defined object to be returned with future response | [optional] 

### Return type

[**list[Response]**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enroll**
> list[Response] enroll(dba_name, email, website, fed_tx_id, legal_name, start_date, account_holder_name, account_type, account_number, routing_number, ownership_type, business_description, business_phone_number, business_address_1, business_address_2, business_city, business_state_province, business_postal_code, principle_first_name, principle_last_name, principle_ssn, principle_date_of_birth, principle_address_line_1, principle_address_line_2, principle_city, principle_state_province, principle_postal_code, principle_title, principle_ownership_percentage, principle_phone_number, stock_symbol=stock_symbol)

Enroll a new merchant or retrieve status of pending merchant.

Enroll a new merchant or retrieve status of pending merchant.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ApiApi()
dba_name = 'dba_name_example' # str | Doing Business As name. <code>*</code> Only field necessary for GET.
email = 'email_example' # str | 
website = 'website_example' # str | 
fed_tx_id = 'fed_tx_id_example' # str | 
legal_name = 'legal_name_example' # str | Legal Business Name
start_date = 'start_date_example' # str | Business Start Date
account_holder_name = 'account_holder_name_example' # str | 
account_type = 'account_type_example' # str | 
account_number = 'account_number_example' # str | Bank Account to deposit transactions. 
routing_number = 'routing_number_example' # str | Bank Routing Number to deposit transactions.
ownership_type = ['ownership_type_example'] # list[str] | Select an ownership type:
business_description = 'business_description_example' # str | 
business_phone_number = 'business_phone_number_example' # str | 
business_address_1 = 'business_address_1_example' # str | 
business_address_2 = 'business_address_2_example' # str | 
business_city = 'business_city_example' # str | 
business_state_province = 'business_state_province_example' # str | 
business_postal_code = 'business_postal_code_example' # str | 
principle_first_name = 'principle_first_name_example' # str | Primary Owners First Name. Adding a number to the parameter allows for adding multiple principle owners. Example: <strong>2principle_first_name</strong>
principle_last_name = 'principle_last_name_example' # str | Primary Owners Last Name.
principle_ssn = 'principle_ssn_example' # str | Primary Owners Social Security Number
principle_date_of_birth = 'principle_date_of_birth_example' # str | 
principle_address_line_1 = 'principle_address_line_1_example' # str | 
principle_address_line_2 = 'principle_address_line_2_example' # str | 
principle_city = 'principle_city_example' # str | 
principle_state_province = 'principle_state_province_example' # str | 
principle_postal_code = 'principle_postal_code_example' # str | 
principle_title = 'principle_title_example' # str | 
principle_ownership_percentage = 'principle_ownership_percentage_example' # str | 
principle_phone_number = 'principle_phone_number_example' # str | 
stock_symbol = 'stock_symbol_example' # str |  (optional)

try:
    # Enroll a new merchant or retrieve status of pending merchant.
    api_response = api_instance.enroll(dba_name, email, website, fed_tx_id, legal_name, start_date, account_holder_name, account_type, account_number, routing_number, ownership_type, business_description, business_phone_number, business_address_1, business_address_2, business_city, business_state_province, business_postal_code, principle_first_name, principle_last_name, principle_ssn, principle_date_of_birth, principle_address_line_1, principle_address_line_2, principle_city, principle_state_province, principle_postal_code, principle_title, principle_ownership_percentage, principle_phone_number, stock_symbol=stock_symbol)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ApiApi->enroll: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dba_name** | **str**| Doing Business As name. &lt;code&gt;*&lt;/code&gt; Only field necessary for GET. | 
 **email** | **str**|  | 
 **website** | **str**|  | 
 **fed_tx_id** | **str**|  | 
 **legal_name** | **str**| Legal Business Name | 
 **start_date** | **str**| Business Start Date | 
 **account_holder_name** | **str**|  | 
 **account_type** | **str**|  | 
 **account_number** | **str**| Bank Account to deposit transactions.  | 
 **routing_number** | **str**| Bank Routing Number to deposit transactions. | 
 **ownership_type** | [**list[str]**](str.md)| Select an ownership type: | 
 **business_description** | **str**|  | 
 **business_phone_number** | **str**|  | 
 **business_address_1** | **str**|  | 
 **business_address_2** | **str**|  | 
 **business_city** | **str**|  | 
 **business_state_province** | **str**|  | 
 **business_postal_code** | **str**|  | 
 **principle_first_name** | **str**| Primary Owners First Name. Adding a number to the parameter allows for adding multiple principle owners. Example: &lt;strong&gt;2principle_first_name&lt;/strong&gt; | 
 **principle_last_name** | **str**| Primary Owners Last Name. | 
 **principle_ssn** | **str**| Primary Owners Social Security Number | 
 **principle_date_of_birth** | **str**|  | 
 **principle_address_line_1** | **str**|  | 
 **principle_address_line_2** | **str**|  | 
 **principle_city** | **str**|  | 
 **principle_state_province** | **str**|  | 
 **principle_postal_code** | **str**|  | 
 **principle_title** | **str**|  | 
 **principle_ownership_percentage** | **str**|  | 
 **principle_phone_number** | **str**|  | 
 **stock_symbol** | **str**|  | [optional] 

### Return type

[**list[Response]**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **settle**
> list[Response] settle(transaction_id, ticket=ticket, meta=meta)

Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.

Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ApiApi()
transaction_id = 'transaction_id_example' # str | Transaction ID of charged event.
ticket = 'ticket_example' # str | Ticket Number used by POS (optional)
meta = NULL # object | Optional user defined object to be returned with future response (optional)

try:
    # Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.
    api_response = api_instance.settle(transaction_id, ticket=ticket, meta=meta)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ApiApi->settle: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| Transaction ID of charged event. | 
 **ticket** | **str**| Ticket Number used by POS | [optional] 
 **meta** | [**object**](.md)| Optional user defined object to be returned with future response | [optional] 

### Return type

[**list[Response]**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tokenize**
> list[Response] tokenize(cc, mm, yy, cvv)

Create a token for later use.

Create a token for later use.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ApiApi()
cc = 'cc_example' # str | Credit Card Number with or without dashes
mm = 'mm_example' # str | 2 digit Month
yy = 'yy_example' # str | 2 digit Year
cvv = 'cvv_example' # str | Card Verification Value found on the card (CVV2, CVC2, CID)

try:
    # Create a token for later use.
    api_response = api_instance.tokenize(cc, mm, yy, cvv)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ApiApi->tokenize: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cc** | **str**| Credit Card Number with or without dashes | 
 **mm** | **str**| 2 digit Month | 
 **yy** | **str**| 2 digit Year | 
 **cvv** | **str**| Card Verification Value found on the card (CVV2, CVC2, CID) | 

### Return type

[**list[Response]**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **void**
> list[Response] void(transaction_id, ticket=ticket, meta=meta)

A Void transaction can be used to back out a previous Sale transaction.

A Void transaction can be used to back out a previous Sale transaction.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ApiApi()
transaction_id = 'transaction_id_example' # str | Transaction ID of charged event.
ticket = 'ticket_example' # str | Ticket Number used by POS (optional)
meta = NULL # object | Optional user defined object to be returned with future response (optional)

try:
    # A Void transaction can be used to back out a previous Sale transaction.
    api_response = api_instance.void(transaction_id, ticket=ticket, meta=meta)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ApiApi->void: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transaction_id** | **str**| Transaction ID of charged event. | 
 **ticket** | **str**| Ticket Number used by POS | [optional] 
 **meta** | [**object**](.md)| Optional user defined object to be returned with future response | [optional] 

### Return type

[**list[Response]**](Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


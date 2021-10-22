/*
 * Triple Play Pay API
 * Payment API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@tripleplaypay.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package io.swagger.client.api;

import io.swagger.client.ApiException;
import io.swagger.client.model.Response;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ApiApi
 */
@Ignore
public class ApiApiTest {

    private final ApiApi api = new ApiApi();

    /**
     * Used to verify funds when the total amount of the purchase is unknown.
     *
     * Used to verify funds when the total amount of the purchase is unknown.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void authorizeTest() throws ApiException {
        String amount = null;
        String cc = null;
        String mm = null;
        String yy = null;
        String cvv = null;
        String ticket = null;
        Object meta = null;
        List<Response> response = api.authorize(amount, cc, mm, yy, cvv, ticket, meta);

        // TODO: test validations
    }
    /**
     * A Void transaction can be used to back out a previous Sale transaction.
     *
     * A Void transaction can be used to back out a previous Sale transaction.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void callVoidTest() throws ApiException {
        String transactionId = null;
        String ticket = null;
        Object meta = null;
        List<Response> response = api.callVoid(transactionId, ticket, meta);

        // TODO: test validations
    }
    /**
     * Charge a credit card or settle a previous charge.
     *
     * Charge a credit card or settle a previous charge.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void chargeTest() throws ApiException {
        String amount = null;
        String transactionId = null;
        String cc = null;
        String mm = null;
        String yy = null;
        String cvv = null;
        String ticket = null;
        Object meta = null;
        List<Response> response = api.charge(amount, transactionId, cc, mm, yy, cvv, ticket, meta);

        // TODO: test validations
    }
    /**
     * A Credit transaction is used to refund a cardholder for a previous transaction.
     *
     * A Credit transaction is used to refund a cardholder for a previous transaction.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void creditTest() throws ApiException {
        String amount = null;
        String cc = null;
        String mm = null;
        String yy = null;
        String cvv = null;
        String ticket = null;
        Object meta = null;
        List<Response> response = api.credit(amount, cc, mm, yy, cvv, ticket, meta);

        // TODO: test validations
    }
    /**
     * Enroll a new merchant or retrieve status of pending merchant.
     *
     * Enroll a new merchant or retrieve status of pending merchant.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void enrollTest() throws ApiException {
        String dbaName = null;
        String email = null;
        String website = null;
        String fedTxId = null;
        String legalName = null;
        String startDate = null;
        String accountHolderName = null;
        String accountType = null;
        String accountNumber = null;
        String routingNumber = null;
        List<String> ownershipType = null;
        String businessDescription = null;
        String businessPhoneNumber = null;
        String businessAddress1 = null;
        String businessAddress2 = null;
        String businessCity = null;
        String businessStateProvince = null;
        String businessPostalCode = null;
        String principleFirstName = null;
        String principleLastName = null;
        String principleSsn = null;
        String principleDateOfBirth = null;
        String principleAddressLine1 = null;
        String principleAddressLine2 = null;
        String principleCity = null;
        String principleStateProvince = null;
        String principlePostalCode = null;
        String principleTitle = null;
        String principleOwnershipPercentage = null;
        String principlePhoneNumber = null;
        String stockSymbol = null;
        List<Response> response = api.enroll(dbaName, email, website, fedTxId, legalName, startDate, accountHolderName, accountType, accountNumber, routingNumber, ownershipType, businessDescription, businessPhoneNumber, businessAddress1, businessAddress2, businessCity, businessStateProvince, businessPostalCode, principleFirstName, principleLastName, principleSsn, principleDateOfBirth, principleAddressLine1, principleAddressLine2, principleCity, principleStateProvince, principlePostalCode, principleTitle, principleOwnershipPercentage, principlePhoneNumber, stockSymbol);

        // TODO: test validations
    }
    /**
     * Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.
     *
     * Alternative to sending a transactionId to charge, this method will settle an outstanding Authorization.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void settleTest() throws ApiException {
        String transactionId = null;
        String ticket = null;
        Object meta = null;
        List<Response> response = api.settle(transactionId, ticket, meta);

        // TODO: test validations
    }
    /**
     * Create a token for later use.
     *
     * Create a token for later use.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void tokenizeTest() throws ApiException {
        String cc = null;
        String mm = null;
        String yy = null;
        String cvv = null;
        List<Response> response = api.tokenize(cc, mm, yy, cvv);

        // TODO: test validations
    }
}

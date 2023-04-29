public class opplwc {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> get5LastOpp() {
        return [
            SELECT Id, Name, Amount, StageName, Data_Criacao__c
            FROM Opportunity
            WHERE stageName like 'Negotiation/Review'
            ORDER BY Data_Criacao__c DESC
            LIMIT 5
        ];
    }
}

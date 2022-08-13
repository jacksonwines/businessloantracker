export class BusinessBalloonLoan {

    constructor(businessName, industry, sourcesOfRevenue, originalLoanSize, useOfFunds, dateIssued, loanTerm, intRate, monthlyPayment, intPaid, intRemaining){
        this.businessName = businessName
        this.industry = industry
        this.sourcesOfRevenue = sourcesOfRevenue
        this.originalLoanSize = originalLoanSize
        this.useOfFunds = useOfFunds
        this.dateIssued = dateIssued
        this.loanTerm = loanTerm
        this.intRate = intRate
        this.monthlyPayment = monthlyPayment
        this.intPaid = intPaid
        this.intRemaining = intRemaining     
}    


summarize() {
console.log(`${this.businessName}, competing in the ${this.industry} industry, is selling ${this.sourcesOfRevenue}. They were issued a $${this.originalLoanSize} loan from us on ${this.dateIssued} in order to pay for ${this.useOfFunds}. The term is for ${this.loanTerm}, and the interest rate is locked in at %${this.intRate}. The interest-only payments are $${this.monthlyPayment} per month. So far, ${this.businessName} has paid us $${this.intPaid}, and they have $${this.intRemaining} remaining.`)

}
}
import {BusinessBalloonLoan} from './BusinessBalloonLoan.js'

var loan1 = new BusinessBalloonLoan('Organic Acres, LLC', 'Agriculture', 'tomatoes and avocadoes', 40000, 'a Tractor', '04.01.22', '2 years', 0.044, 2000, 4000, 10000)
var loan2 = new BusinessBalloonLoan('EV Motors, LLC', 'Used Auto', 'used vehicles', 90000, 'inventory', '02.01.21', '5 years', 0.061, 2000, 20000, 2000)
var loan3 = new BusinessBalloonLoan('Topwell Spa, LLC', 'Spa', 'spa servies', 10000, 'a Sauna', '01.01.20', '7 years', 0.081, 500, 2500, 5000)

loan1.summarize()
loan2.summarize()
loan3.summarize()

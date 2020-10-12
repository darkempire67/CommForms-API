const mongoose = require("mongoose");
const CommFormSchema = mongoose.Schema({
  //step 1
  firstName: String,
  lastName: String,
  email: String,
  companyBranch: String,
  //step 2
  loanNumber: Number,
  escrowNumber: Number,
  loanAmount: Number,
  fundedDate: Date,
  processor: String,
  escrowCompany: String,
  lenderName: String,
  borrowers: String,
  propertyAddress: String,
  amountCheck: Number,
  AmountOfCheckWired: Boolean, // this wired is for amount OF CHECK
  //----step 3
  typeOfLoan: String,
  transaction: String,
  correspondent: Boolean,
  correspondentCompany: String,
  state: String,
  //step 4
  additionalCharge: Array,
  // step 5
  loanOfficer: String,
  flatFeeOrPercent: String,
  flatFee: Number,
  businessName: String,
  percent: Number,
  paymentTypeWired: Boolean,
  paymentAmount: Number,

  // LO2
  loanOfficer2: String,
  flatFeeOrPercent2: String,
  flatFee2: Number,
  businessName2: String,
  percent2: Number,
  paymentTypeWired2: Boolean,
  paymentAmount2: Number,
  twoLOs: Boolean,

  // second payment temp var---> this is to not lose the original value of
  //paymentAmount when calculating different scenarios.

  //user phone number
  phoneNumber: String,
  dateCreated: { type: Date, default: Date.now },
});
module.exports = mongoose.model("CommForm", CommFormSchema);

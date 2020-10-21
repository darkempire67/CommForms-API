const express = require("express");
const router = express.Router();
const CommForm = require("../models/CommForm");

// routes
// get  all forms
router.get("/", async (req, res) => {
  try {
    const commForm = await CommForm.find();
    res.json(commForm);
  } catch (err) {
    res.json({ message: err });
  }
});
// get Specific CommForm
router.get("/:id", async (req, res) => {
  try {
    const commForm = await CommForm.findById(req.params.id);
    res.json(commForm);
  } catch (err) {
    res.json({ message: err });
  }
});

// submit a commForm
router.post("/", async (req, res) => {
  const commForm = new CommForm({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    companyBranch: req.body.companyBranch,
    //step 2
    loanNumber: req.body.loanNumber,
    escrowNumber: req.body.escrowNumber,
    loanAmount: req.body.loanAmount,
    fundedDate: req.body.fundedDate,
    processor: req.body.processor,
    escrowCompany: req.body.escrowCompany,
    lenderName: req.body.lenderName,
    borrowers: req.body.borrowers,
    propertyAddress: req.body.propertyAddress,
    amountCheck: req.body.amountCheck,
    AmountOfCheckWired: req.body.AmountOfCheckWired, // this wired is for amount OF CHECK
    //----step 3
    typeOfLoan: req.body.typeOfLoan,
    transaction: req.body.transaction,
    correspondent: req.body.correspondent,
    correspondentCompany: req.body.correspondentCompany,
    state: req.body.state,
    //step 4
    additionalCharge: req.body.additionalCharge,
    // step 5
    loanOfficer: req.body.loanOfficer,
    flatFeeOrPercent: req.body.flatFeeOrPercent,
    flatFee: req.body.flatFee,
    businessName: req.body.businessName,
    percent: req.body.percent,
    paymentTypeWired: req.body.paymentTypeWired,
    paymentAmount: req.body.paymentAmount,

    // LO2
    loanOfficer2: req.body.loanOfficer2,
    flatFeeOrPercent2: req.body.flatFeeOrPercent2,
    flatFee2: req.body.flatFee2,
    businessName2: req.body.businessName2,
    percent2: req.body.percent2,
    paymentTypeWired2: req.body.paymentTypeWired2,
    paymentAmount2: req.body.paymentAmount2,
    twoLOs: req.body.twoLOs,

    // second payment temp var---> this is to not lose the original value of
    //paymentAmount when calculating different scenarios.

    //user phone number
    phoneNumber: req.body.phoneNumber,
  });
  try {
    const savedCommForm = await commForm.save();

    res.json(savedCommForm);
  } catch (err) {
    res.json({ message: "something went wrong" });
  }
});
module.exports = router;

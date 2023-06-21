import React, { useState } from "react";
import CloseIcon from "../../assets/svgs/close-circle.svg";
import add from "../../assets/images/add.png";
import AppBtn from "../AppBtn/AppBtn";
import ConfirmPaymentModal from "../Dashboard/ConfirmPaymentModal";
import AppInput from "../AppInput/AppInput";
import AppDropDown from "../AppDropDown/AppDropDown";
import ChooseBeneficiaryDropDown from "../ChooseBeneficiaryDropDown/ChooseBeneficiaryDropDown";

const FundAccountModal = ({
  openSingleModal,
  setOpenSingleModal,
  currentModal,
}) => {
  const [confirmationmodal, setConfirmationmodal] = React.useState(false);
  const [selected, setSelected] = useState(0);

  //   const closeConfirmModal = () => setConfirmationmodal(!confirmationmodal);

  const tab = [" New Beneficiary", " Saved Beneficiary"];

  if (openSingleModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const toggleModal = (e) => {
    if (e.target.id === "modalWrapperId") {
      setOpenSingleModal(!modal);
    }
  };

  return (
    <>
      {/* <ConfirmPaymentModal
        confirmationmodal={confirmationmodal}
        closeConfirmModal={closeConfirmModal}
      /> */}
      {openSingleModal && (
        <div
          id="modalWrapperId"
          className="fixed top-0 inset-0 bg-black bg-opacity-70 flex justify-center items-center customModal"
          onClick={toggleModal}
        >
          <div className="bg-white p-2 relative h-[90%] w-[80%] md:w-[50%] overflow-y-auto pb-10  rounded-md">
            <div className="body">
              <div className="flex justify-end w-full">
                <button onClick={() => setOpenSingleModal(false)}>
                  <img src={CloseIcon} alt="" />
                </button>
              </div>
              <div>
                <h5 className="text-center heading-five mb-5">Transfer Fund</h5>
              </div>

              {currentModal && (
                <>
                  <div className="ml-12 mb-5 w-full flex items-center gap-5">
                    <div>
                      <span className="font-montserrat">Transfer 1</span>
                    </div>
                    <div>
                      <span className="font-montserrat">Transfer 2</span>
                    </div>

                    <img src={add} alt="" className="w-[20px] h-[20px]" />
                  </div>

                  <div className="customLine"></div>
                </>
              )}

              <div className=" border-[#CACACA] border-[1px] p-2 w-[100%]  md:w-[87%] gap-3 rounded-[15px] tabWrapper items-center justify-between flex self-center">
                {tab.map((item, index) => {
                  return (
                    <AppBtn
                      className={`text-[#000] w-[48%] customBtnText] ${
                        selected === index
                          ? "bg-[#FAA21B] "
                          : "bg-[#fff] border-[#CACACA] border-[1px]"
                      } `}
                      title={item}
                      onClick={() => setSelected(index)}
                    />
                  );
                })}
              </div>

              <div className="flex justify-center "></div>

              {/* view */}
              {selected === 0 ? (
                <div className="flex flex-col mt-8 justify-center items-center px-4 md:px-10">
                  <div className="form-group flex-col md:flex-row w-full justify-center">
                    <div className="w-full mb-3 md:mb-6">
                      <AppInput
                        type="number"
                        placeholderTop="Recipient's Account Number"
                        placeholder="Enter account number"
                        hasPLaceHolder={true}
                        className="bg-[#F5F5F5] border-[#F5F5F5]"
                      />
                    </div>

                    <div className="w-full mb-3 md:mb-6">
                      <AppInput
                        type="text"
                        placeholderTop=" Account Name"
                        placeholder="Enter your account Name"
                        hasPLaceHolder={true}
                        className="bg-[#F5F5F5] border-[#F5F5F5]"
                      />
                    </div>
                  </div>

                  <div className="form-group flex-col md:flex-row  w-full justify-center">
                    <div className="w-full mb-3 md:mb-6">
                      <AppDropDown className="border-[#F5F5F5]" />
                    </div>

                    <div className="w-full mb-3 md:mb-6">
                      <AppInput
                        type="text"
                        placeholderTop="Enter Amount"
                        placeholder="Enter an amount"
                        hasPLaceHolder={true}
                        className="bg-[#F5F5F5] border-[#F5F5F5]"
                      />
                    </div>
                  </div>

                  <div className="form-group w-full justify-center">
                    <div className="w-full mb-3 md:mb-6">
                      <label htmlFor=""> Narration</label> <br />
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                        placeholder="Enter your message"
                        className="bg-gray-100 w-full p-4"
                        style={{ borderRadius: 18, border: 0 }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full mb-3 md:mb-6">
                    <input type="checkbox" name="" id="" className="mr-2" />
                    Save Beneficiary
                  </div>

                  <AppBtn
                    title="Send Money"
                    className="text-[#000] w-full bg-[#FAA21B] mt-2"
                    onClick={() => {
                      setOpenSingleModal(false);
                      setConfirmationmodal(!confirmationmodal);
                    }}
                  />
                </div>
              ) : (
                <div className="flex flex-col mt-8 justify-center items-center px-4 md:px-10">
                  <div className="w-full mb-3 md:mb-6">
                    <ChooseBeneficiaryDropDown />
                  </div>
                  <div className="form-group flex-col md:flex-row w-full justify-center">
                    <div className="w-full mb-3 md:mb-6">
                      <label htmlFor="" className="font-small">
                        Recipient's Account Number
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        placeholder="Enter account number"
                        className="bg-gray-100 w-full"
                        style={{ border: 0 }}
                      />
                    </div>

                    <div className="w-full mb-3 md:mb-6">
                      <label htmlFor=""> Account Name</label> <br />
                      <input
                        type="text"
                        placeholder="Enter your account number"
                        className="bg-gray-100 w-full"
                        style={{ border: 0 }}
                      />
                    </div>
                  </div>

                  <div className="form-group flex-col md:flex-row  w-full justify-center">
                    <div className="w-full mb-3 md:mb-6">
                      <AppDropDown />
                    </div>

                    <div className="w-full mb-3 md:mb-6">
                      <label htmlFor=""> Enter Amount</label> <br />
                      <input
                        type="number"
                        placeholder="Enter your account number"
                        className="bg-gray-100 w-full"
                        style={{ border: 0 }}
                      />
                    </div>
                  </div>

                  <div className="form-group w-full justify-center">
                    <div className="w-full mb-3 md:mb-6">
                      <label htmlFor=""> Narration</label> <br />
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                        placeholder="Enter your message"
                        className="bg-gray-100 w-full p-4"
                        style={{ borderRadius: 18, border: 0 }}
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full mb-3 md:mb-6">
                    <input type="checkbox" name="" id="" className="mr-2" />
                    Save Beneficiary
                  </div>

                  <AppBtn
                    title="Send Money"
                    className="text-[#000] w-full bg-[#FAA21B] mt-2"
                    onClick={() => {
                      setConfirmationmodal(!confirmationmodal);
                      setModal(false);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <ConfirmPaymentModal
        confirmationmodal={confirmationmodal}
        setConfirmationmodal={setConfirmationmodal}
      />
    </>
  );
};

export default FundAccountModal;

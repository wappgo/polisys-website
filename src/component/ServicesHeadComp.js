import React, { useState } from 'react';
// import "../../styles/bg.css"
const Globe = `${process.env.PUBLIC_URL}assets/Img/uil-globe.svg`;
const AndroidIcon = `${process.env.PUBLIC_URL}assets/Img/uil-android-alt.svg`;
const AppleIcon = `${process.env.PUBLIC_URL}assets/Img/uil-apple.svg`;
const MonitorIcon = `${process.env.PUBLIC_URL}assets/Img/uil-monitor-heart-rate.svg`;
const RobotIcon = `${process.env.PUBLIC_URL}assets/Img/uil-robot.svg`;
const DatabaseIcon = `${process.env.PUBLIC_URL}assets/Img/uil-database.svg`;

const ServicesHeadComp = () => {
    const[infoTech, setInfoTech] = useState(true)
    const[lawAndLegal, setLawAndLegal] = useState(false)
    const[financeAndWealdth, setFinanceAndWealdth] = useState(false)
    const[mediaAndMarketing, setMediaAndMarketing] = useState(false)
    const[policiesAndDecisionMaking, setPoliciesAndDecisionMaking] = useState(false)
    

    const showInfoTech = () => {
        setInfoTech(true)
        setLawAndLegal(false)
        setFinanceAndWealdth(false)
        setMediaAndMarketing(false)
        setPoliciesAndDecisionMaking(false)
    }

    const showLegalLaw = () => {
        setLawAndLegal(true)
        setInfoTech(false)
        setFinanceAndWealdth(false)
        setMediaAndMarketing(false)
        setPoliciesAndDecisionMaking(false)

    }

    const showFinance = () => {
        setFinanceAndWealdth(true)
        setInfoTech(false)
        setLawAndLegal(false)
        setMediaAndMarketing(false)
        setPoliciesAndDecisionMaking(false)
    }

    const showMarketing =  () => {
        setMediaAndMarketing(true)
        setFinanceAndWealdth(false)
        setInfoTech(false)
        setLawAndLegal(false)
        setPoliciesAndDecisionMaking(false)
    }

    const showPolicies = () => {
        setPoliciesAndDecisionMaking(true)
        setFinanceAndWealdth(false)
        setInfoTech(false)
        setLawAndLegal(false)
        setMediaAndMarketing(false)
    }
  return (
    <div className="d-none d-lg-block">
        <div className="industries-drop-main">
            <div className="industries-drop-main-sub">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="industries-drop1">
                            <h2 className="industries-margin-20">
                                Services
                            </h2>
                            <p>
                                Explore how Polisys's insights and services are contributing to reshaping the future of your specific industry.
                            </p>
                            <button className="">Know More</button>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className='d-flex'>
                            <div className="industries-drop2">
                                <h1>
                                    We Specialize Working In
                                </h1>
                                <div className='stradiv' onMouseEnter={() => showInfoTech()}>
                                    <div>
                                        <p className={infoTech ? "industries-margin-20 d-flex flex-row justify-content-between hoverColor" : "industries-margin-20 d-flex flex-row justify-content-between"} >
                                            Information & Technology

                                            {/* <img src={images.industries_right_arrow.default} /> */}
                                        </p>
                                    </div>
                                    <div className='stragarr'>
                                        <img src="./assets/home/industries-right-arrow.svg" />
                                    </div>
                                </div>

                                <div className='stradiv' onMouseEnter={() => showLegalLaw()}>
                                    <div>
                                        <p className={lawAndLegal ? "industries-margin-20 d-flex flex-row justify-content-between hoverColor" : "industries-margin-20 d-flex flex-row justify-content-between" }  >
                                            Law & Legal Proceedings

                                            {/* <img src={images.industries_right_arrow.default} /> */}
                                        </p>
                                    </div>
                                    <div className='stragarr'>
                                        <img src="./assets/home/industries-right-arrow.svg" />
                                    </div>
                                </div>

                                <div className='stradiv' onMouseEnter={() => showFinance()}>
                                    <div>
                                        <p className={financeAndWealdth ? "industries-margin-20 d-flex flex-row justify-content-between hoverColor" : "industries-margin-20 d-flex flex-row justify-content-between"} >
                                            Finance & Wealth

                                            {/* <img src={images.industries_right_arrow.default} /> */}
                                        </p>
                                    </div>
                                    <div className='stragarr'>
                                        <img src="./assets/home/industries-right-arrow.svg" />
                                    </div>
                                </div>

                                <div className='stradiv' onMouseEnter={() => showMarketing()}>
                                    <div>
                                        <p className={mediaAndMarketing ? "industries-margin-20 d-flex flex-row justify-content-between hoverColor" : "industries-margin-20 d-flex flex-row justify-content-between" }>
                                            Media & Marketing

                                            {/* <img src={images.industries_right_arrow.default} /> */}
                                        </p>
                                    </div>
                                    <div className='stragarr'>
                                        <img src="./assets/home/industries-right-arrow.svg" />
                                    </div>
                                </div>

                                <div className='stradiv' onMouseEnter={() => showPolicies()}>
                                    <div>
                                        <p className={policiesAndDecisionMaking ? "industries-margin-20 d-flex flex-row justify-content-between hoverColor" : "industries-margin-20 d-flex flex-row justify-content-between" }>
                                            Policies & Decision Making

                                            {/* <img src={images.industries_right_arrow.default} /> */}
                                        </p>
                                    </div>
                                    <div className='stragarr'>
                                        <img src="./assets/home/industries-right-arrow.svg" />
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={infoTech ? "d-block industries-drop3" : "d-none industries-drop3"}>
                            <h1>
                                Information & Technology
                            </h1>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                            Website Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={RobotIcon} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Chatbot Service
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={AndroidIcon} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Android App Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={DatabaseIcon} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Data Scientist
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={AppleIcon} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                IOS App Development
                                </p>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={MonitorIcon} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                AI / Machine Learning
                                </p>
                            </div>


                        </div>

                        <div className={lawAndLegal ? "d-block industries-drop3" : "d-none industries-drop3"}>
                            <h1>
                                Second
                            </h1>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                            Website Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Chatbot Service
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Android App Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Data Scientist
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                IOS App Development
                                </p>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                AI / Machine Learning
                                </p>
                            </div>


                        </div>

                        <div className={financeAndWealdth ? "d-block industries-drop3" : "d-none industries-drop3"}>
                            <h1>
                                Third
                            </h1>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                            Website Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Chatbot Service
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Android App Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Data Scientist
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                IOS App Development
                                </p>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                AI / Machine Learning
                                </p>
                            </div>


                        </div>

                        <div className={mediaAndMarketing ? "d-block industries-drop3" : "d-none industries-drop3"}>
                            <h1>
                            fourth
                            </h1>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                            Website Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Chatbot Service
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Android App Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Data Scientist
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                IOS App Development
                                </p>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                AI / Machine Learning
                                </p>
                            </div>


                        </div>

                        <div className={policiesAndDecisionMaking ? "d-block industries-drop3" : "d-none industries-drop3"}>
                            <h1>
                                Five
                            </h1>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                            Website Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Chatbot Service
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Android App Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Data Scientist
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                IOS App Development
                                </p>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                AI / Machine Learning
                                </p>
                            </div>


                        </div>

                            

                        {/* <div className={androidAppDev ? "d-block industries-drop3" : "d-none industries-drop3"}>
                            <h1>
                                Third
                            </h1>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                            Website Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Chatbot Service
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Android App Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Data Scientist
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                IOS App Development
                                </p>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                AI / Machine Learning
                                </p>
                            </div>


                        </div>

                        <div className={androidAppDev ? "d-block industries-drop3" : "d-none industries-drop3"}>
                            <h1>
                                Four
                            </h1>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                            Website Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Chatbot Service
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Android App Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Data Scientist
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                IOS App Development
                                </p>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                AI / Machine Learning
                                </p>
                            </div>


                        </div>

                        <div className={androidAppDev ? "d-block industries-drop3" : "d-none industries-drop3"}>
                            <h1>
                                Five
                            </h1>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                            Website Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Chatbot Service
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Android App Development
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                                    <div className="d-flex flex-row spectech">
                                        <div className='infoimg'>
                                            <div className=''><img src={Globe} alt='global' /></div>
                                        </div>
                                        <p className="industries-margin-20">
                                        Data Scientist
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                IOS App Development
                                </p>
                            </div>
                            <div className="d-flex flex-row spectech">
                                <div className='infoimg'>
                                    <div className=''><img src={Globe} alt='global' /></div>
                                </div>
                                <p className="industries-margin-20">
                                AI / Machine Learning
                                </p>
                            </div>


                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesHeadComp
import React from 'react'

const InsightsHeadComp = () => {
  return (
    <div className="d-none d-lg-block">
        <div className="insights-drop-main">
        <div className="insights-drop-main-sub">
            <div className="row">
                <div className="col-lg-3">
                    <div className="insights-drop1">
                        <h2 className="insight-margin-20">
                        Insights
                        </h2>
                        <p>
                        Asking the better questions that unlock new answers to the working world's most complex issues.
                        </p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="insights-drop2">
                        <h1>
                        Latest Trends
                        </h1>
                        <p clasName="insight-margin-20">
                        Information & Technology
                        </p>
                        <p clasName="insight-margin-20">
                        Law & Legal Proceedings
                        </p>
                        <p clasName="insight-margin-20">
                        Finance & Wealth
                        </p>
                        <p clasName="insight-margin-20">
                        Media & Marketing
                        </p>
                        <p clasName="">
                        Policies & Decision Making
                        </p>
                    </div>
                </div>
                <div className="col-lg-3">
                <div className="insights-drop3">
                        <h1>
                        Alumini on The Board
                        </h1>
                        <p clasName="insight-margin-20">
                        Chief Executive officer
                        </p>
                        <p clasName="insight-margin-20">
                        Chief Marketing officer
                        </p>
                        <p clasName="insight-margin-20">
                        Chief Finance officer
                        </p>
                        <p clasName="insight-margin-20">
                        Chief Technology officer
                        </p>
                        <p clasName="">
                        Board Members
                        </p>
                    </div>
                    </div>
                <div className="col-lg-3">
                <img
                     src="/assets/home/insight-drop-right-img.png"
                     className="img-fluid"
                     alt="img"
                   />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default InsightsHeadComp
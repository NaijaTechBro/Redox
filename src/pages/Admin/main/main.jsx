import "./Main.css"
import { Link } from "react-router-dom";

const Main = ()=>{
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                <div className="main__greeting">
                    <h1>Hello, NaijaTechBro😱</h1>
                    <p>Welcome to your admin dashboard</p>
                </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Users</p>
                            <span className="font-bold text-title">76</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Post</p>
                            <span className="font-bold text-title">16</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Admin</p>
                            <span className="font-bold text-title"> 7</span>
                        </div>
                    </div>
                </div>


                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Users Reports</h1>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Status Reports</h1>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>

                        <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Users</h1>
                            <p>16</p>
                        </div>
                        <div className="card4">
                            <h1>Admins</h1>
                            <p>76</p>
                        </div>
                        <div className="card3">
                            <h1>Posts</h1>
                            <p>647</p>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default  Main;
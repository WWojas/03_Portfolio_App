import React, { Component } from 'react';

class Reja_S4_Pricing extends Component {
    render() {
        return (
            <div>
                <div className='row'>

                    <div className='col-12 m-top '>
                        <h1> Oferta</h1>
                    </div>

                    <div class='tabs'>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a className="nav-link active offer_text_tab" data-toggle="tab" href="#Standard">Standard </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#Plus"> Plus +</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#Premium"> Premium ++</a>
                            </li>
                        </ul>

                        {/* Tabs content*/}
                        <div class="tab-content">
                            <div class="tab-pane container active" id="Standard">


                                {/* PAKIET BASIC */}

                                {/* 5 dni*/}
                                <div class="offer_wrapper">
                                    <div className="round_day_icon d-none d-sm-flex">
                                        <div>
                                            <h1> 30 dni </h1>
                                            <hr></hr>
                                            <h1> 5h dziennie</h1>
                                        </div>
                                    </div>


                                    <div class="offer_text_box">
                                        <h1> 1200 zł/ MIESIĄC</h1>
                                        <p><u> 5 dni w tygodniu </u></p>
                                        <p> Opieka 5h dziennie, od 7:30 - 17.30 (8h)</p>
                                        <p> Pełne wyżywienie (3 posiłki)</p>
                                        <p> Lekcje języka angielskiego</p>
                                    </div>

                                </div>


                                {/* 4 dni */}

                                <div className="offer_wrapper">
                                    <div className="round_day_icon d-none d-sm-flex">
                                        <div>
                                            <h1> 20 dni </h1>
                                            <hr></hr>
                                            <h1> 5h dziennie</h1>
                                        </div>
                                    </div>

                                    <div className="offer_text_box">
                                        <h1> 1000 zł/ MIESIĄC</h1>
                                        <p><u> 4 dni w tygodniu </u></p>
                                        <p> Opieka 5h dziennie, od 7:30 - 17.30 (8h)</p>
                                        <p> Pełne wyżywienie (3 posiłki)</p>
                                        <p> Lekcje języka angielskiego</p>
                                    </div>
                                </div>

                                {/* 3 dni */}
                                <div className="offer_wrapper">
                                    <div className="round_day_icon d-none d-sm-flex">
                                        <div>
                                            <h1> 20 dni </h1>
                                            <hr></hr>
                                            <h1> 5h dziennie</h1>
                                        </div>
                                    </div>

                                    <div className="offer_text_box">
                                        <h1> 800 zł/ MIESIĄC</h1>
                                        <p><u> 3 dni w tygodniu </u></p>
                                        <p> Opieka 5h dziennie, od 7:30 - 17.30 (8h)</p>
                                        <p> Pełne wyżywienie (3 posiłki)</p>
                                        <p> Lekcje języka angielskiego</p>
                                    </div>
                                </div>

                                {/* 2 dni */}
                                <div className="offer_wrapper">
                                    <div className="round_day_icon d-none d-sm-flex">
                                        <div>
                                            <h1> 15 dni </h1>
                                            <hr></hr>
                                            <h1> 5h dziennie</h1>
                                        </div>
                                    </div>

                                <div className="offer_text_box">
                                    <h1> 600 zł/ MIESIĄC</h1>
                                    <p><u> 2 dni w tygodniu </u></p>
                                    <p> Opieka 5h dziennie, od 7:30 - 17.30 (8h)</p>
                                    <p> Pełne wyżywienie (3 posiłki)</p>
                                    <p> Lekcje języka angielskiego</p>
                                </div>
                                </div>

                                {/* 1 dni */}
                                <div className="offer_wrapper">
                                    <div className="round_day_icon d-none d-sm-flex">
                                        <div>
                                            <h1> 10 dni </h1>
                                            <hr></hr>
                                            <h1> 5h dziennie</h1>
                                        </div>
                                    </div>

                                <div className="offer_text_box">
                                    <h1> 400 zł/ MIESIĄC</h1>
                                    <p><u> 1 dni w tygodniu </u></p>
                                    <p> Opieka 5h dziennie, od 7:30 - 17.30 (8h)</p>
                                    <p> Pełne wyżywienie (3 posiłki)</p>
                                    <p> Lekcje języka angielskiego</p>
                                </div>
                                </div>

                            </div>


                            {/* PAKIET PLUS*/}
                            <div class="tab-pane container fade" id="Plus">


                                {/* 5 dni*/}
                                <div class="offer_wrapper">
                                    <div className="round_day_icon_plus d-none d-sm-flex">
                                        <div>
                                            <h1> 30 dni </h1>
                                            <hr></hr>
                                            <h1> 8h dziennie</h1>
                                        </div>
                                    </div>

                                    <div className="offer_text_box">
                                    <h1> 1200 zł/ MIESIĄC</h1>
                                    <p><u> 5 dni w tygodniu </u></p>
                                    <p> Opieka 8h dziennie, od 7:30 - 17.30 (8h)</p>
                                    <p> Pełne wyżywienie (3 posiłki)</p>
                                    <p> Lekcje języka angielskiego</p>
                                </div>
                                </div>

                                {/* 4 dni*/}
                                <div class="offer_wrapper">
                                    <div className="round_day_icon_plus d-none d-sm-flex">
                                        <div>
                                            <h1> 25 dni </h1>
                                            <hr></hr>
                                            <h1> 8h dziennie</h1>
                                        </div>
                                    </div>

                                <div className="offer_text_box">
                                    <h1> 100 zł/ MIESIĄC</h1>
                                    <p><u> 4 dni w tygodniu </u></p>
                                    <p> Opieka 8h dziennie, od 7:30 - 17.30 (8h)</p>
                                    <p> Pełne wyżywienie (3 posiłki)</p>
                                    <p> Lekcje języka angielskiego</p>
                                </div>
                                </div>

                                {/* 3 dni*/}
                                <div class="offer_wrapper">
                                    <div className="round_day_icon_plus d-none d-sm-flex">
                                        <div>
                                            <h1> 20 dni </h1>
                                            <hr></hr>
                                            <h1> 8h dziennie</h1>
                                        </div>
                                    </div>

                                <div className="offer_text_box">
                                    <h1> 800 zł/ MIESIĄC</h1>
                                    <p><u> 3 dni w tygodniu </u></p>
                                    <p> Opieka 8h dziennie, od 7:30 - 17.30 (8h)</p>
                                    <p> Pełne wyżywienie (3 posiłki)</p>
                                    <p> Lekcje języka angielskiego</p>
                                </div>
                                </div>

                                {/* 2 dni*/}
                                <div class="offer_wrapper">
                                    <div className="round_day_icon_plus d-none d-sm-flex">
                                        <div>
                                            <h1> 30 dni </h1>
                                            <hr></hr>
                                            <h1> 8h dziennie</h1>
                                        </div>
                                    </div>

                                <div className="offer_text_box">
                                    <h1> 600 zł/ MIESIĄC</h1>
                                    <p><u> 2 dni w tygodniu </u></p>
                                    <p> Opieka 8h dziennie, od 7:30 - 17.30 (8h)</p>
                                    <p> Pełne wyżywienie (3 posiłki)</p>
                                    <p> Lekcje języka angielskiego</p>
                                </div>
                                </div>

                                {/* 1 dni*/}
                                <div class="offer_wrapper">
                                    <div className="round_day_icon_plus d-none d-sm-flex">
                                        <div>
                                            <h1> 30 dni </h1>
                                            <hr></hr>
                                            <h1> 8h dziennie</h1>
                                        </div>
                                    </div>

                                <div className="offer_text_box">
                                    <h1> 400 zł/ MIESIĄC</h1>
                                    <p><u> 1 dni w tygodniu </u></p>
                                    <p> Opieka 8h dziennie, od 7:30 - 17.30 (8h)</p>
                                    <p> Pełne wyżywienie (3 posiłki)</p>
                                    <p> Lekcje języka angielskiego</p>
                                </div>
                                </div>

                            </div>

                            {/* PAKIET PREMIUM*/}
                            <div class="tab-pane container fade" id="Premium">


                                {/* 5 dni*/}
                                <div class="offer_wrapper">
                                    <div className="round_day_icon_premium d-none d-sm-flex">
                                        <div>
                                            <h1> 30 dni </h1>
                                            <hr></hr>
                                            <h1> 10h dziennie</h1>
                                        </div>
                                    </div>

                                <div className="offer_text_box">
                                    <h1> 1200 zł/ MIESIĄC</h1>
                                    <p><u> 5 dni w tygodniu </u></p>
                                    <p> Opieka 10h dziennie, od 7:30 - 17.30 (8h)</p>
                                    <p> Pełne wyżywienie (3 posiłki)</p>
                                    <p> Lekcje języka angielskiego</p>
                                </div>
                                </div>

                                {/* 4 dni*/}
                                <div class="offer_wrapper">
                                    <div className="round_day_icon_premium d-none d-sm-flex">
                                        <div>
                                            <h1> 25 dni </h1>
                                            <hr></hr>
                                            <h1> 10h dziennie</h1>
                                        </div>
                                    </div>

                                    <div className="offer_text_box">
                                    <h1> 100 zł/ MIESIĄC</h1>
                                    <p><u> 4 dni w tygodniu </u></p>
                                    <p> Opieka 10h dziennie, od 7:30 - 17.30 (8h)</p>
                                    <p> Pełne wyżywienie (3 posiłki)</p>
                                    <p> Lekcje języka angielskiego</p>
                                </div>
                                </div>

                                {/* 3 dni*/}
                                <div class="offer_wrapper">
                                    <div className="round_day_icon_premium d-none d-sm-flex">
                                        <div>
                                            <h1> 20 dni </h1>
                                            <hr></hr>
                                            <h1> 10h dziennie</h1>
                                        </div>
                                    </div>

                                    <div className="offer_text_box">
                                    <h1> 800 zł/ MIESIĄC</h1>
                                    <p><u> 3 dni w tygodniu </u></p>
                                    <p> Opieka 10h dziennie, od 7:30 - 17.30 (8h)</p>
                                    <p> Pełne wyżywienie (3 posiłki)</p>
                                    <p> Lekcje języka angielskiego</p>
                                </div>
                                </div>

                                {/* 2 dni*/}
                                <div class="offer_wrapper">
                                    <div className="round_day_icon_premium d-none d-sm-flex">
                                        <div>
                                            <h1> 15 dni </h1>
                                            <hr></hr>
                                            <h1> 10h dziennie</h1>
                                        </div>
                                    </div>

                                    <div className="offer_text_box">
                                    <h1> 600 zł/ MIESIĄC</h1>
                                    <p><u> 2 dni w tygodniu </u></p>
                                    <p> Opieka 10h dziennie, od 7:30 - 17.30 (8h)</p>
                                    <p> Pełne wyżywienie (3 posiłki)</p>
                                    <p> Lekcje języka angielskiego</p>
                                </div>
                                </div>

                                {/* 1 dni*/}
                                <div class="offer_wrapper">
                                    <div className="round_day_icon_premium d-none d-sm-flex">
                                        <div>
                                            <h1> 30 dni </h1>
                                            <hr></hr>
                                            <h1> 10h dziennie</h1>
                                        </div>
                                    </div>

                                    <div className="offer_text_box">
                                    <h1> 400 zł/ MIESIĄC</h1>
                                    <p><u> 1 dni w tygodniu </u></p>
                                    <p> Opieka 10h dziennie, od 7:30 - 17.30 (8h)</p>
                                    <p> Pełne wyżywienie (3 posiłki)</p>
                                    <p> Lekcje języka angielskiego</p>
                                </div>
                                </div>


                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}

export default Reja_S4_Pricing;
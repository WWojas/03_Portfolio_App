
{/* ABOUT US */}

<div className='row '>

    {/* Navigation div*/}
    <div className='about_section'></div>

    <div className='img-fluid about_pic col-12 col-12'>


        {/*Up navigation arrow*/}
        <div className='col-12 nav header_text '>

            <button className='header_arrow up_arrow' onClick={this.scrollToThird}><img src='/app/images/down-arrow.gif'/></button>
        </div>

        <div className='text-content viewport_height'>


            <div className='inner_text_box viewport_height third_section'>

                <h1> Nasz Zespół </h1>
                <hr/>
                <h5> Kadra dydaktyczna Przedszkola to zespół doświadczonych nauczycielek z wieloletnim stażem w zakresie nauczania przedszkolnego.</h5>
                <h5> Nasi Pedagodzy dbają o prawidłowy rozwój dzieci zarówno w zakresie umysłowym, jak i emocjonalnym. </h5>

            </div>


            {/*Down navigation arrow*/}
            <div className='col-12 nav header_text '>
                <button className='header_arrow down_arrow' onClick ={this.scrollToContact}><img src='/app/images/down-arrow.gif'/></button>
            </div>
        </div>

    </div>
</div>
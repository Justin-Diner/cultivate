import './CallToAction.css'

const CallToAction = () => {
    return (
        <div id="CTA_container">
            <div id="CTA_wrapper">
                <div id="CTA_video_wrapper">
                    <iframe class="fullscreen-iframe" frameborder="0" width="640" height="360" src="https://www.youtube.com/embed/uOkhEHvhBH4?&controls=0&rel=0&mute=1&autoplay=1&playsinline=1&enablejsapi=1&showinfo=0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="YouTube video player"  allowfullscreen></iframe>
                </div>
                <div id="CTA_text_items_wrapper">
                    <div id="CTA_quote">
                        <p id="CTA_experience">Experience The Finest Events In Miami</p>
                    </div>
                    <div id="CTA_enter_email">
                        <p>Enter Your Email And Explore</p>
                    </div>
                    <div id="CTA_email_input">
                        <label>
                            <input id="CTA_email_input_box" type="text" placeholder="Email"/>
                        </label>
                        <div id="CTA_submit_button">
                            <i class="fas fa-glass-cheers"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction;
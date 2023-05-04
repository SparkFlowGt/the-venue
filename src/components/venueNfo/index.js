import { Zoom } from "@mui/material";
import icon_calendar from '../../resources/images/icons/calendar.png'
import icon_location from '../../resources/images/icons/location.png'


const VenueNfo = () =>{
    return(
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    
                <Zoom className="vn_item" in appear timeout={3000}>
                        <div>
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon_calendar})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Event Date & Time
                                    </div>
                                    <div className="vn_desc">
                                    20 Aug 2024, 01:20:00 GMT
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom className="vn_item" in appear  timeout={4000}>
                        <div>
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow "></div>
                                    <div
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon_location})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Event Location
                                    </div>
                                    <div className="vn_desc">
                                    Minas Tirith
                                    Main Street
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Zoom>
  
                </div>
            </div>
        </div>
    )
}

export default VenueNfo;
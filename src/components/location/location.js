
const Location = () =>{
    return(
        <div className="location_wrapper">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1313451.1381640686!2d-75.95431875440781!3d38.09117356238131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b763a5b2e2e763%3A0x7d1be8a16fbce891!2sMiddle%20Earth%2C%20Hollywood%2C%20Maryland%2020636%2C%20Statele%20Unite%20ale%20Americii!5e0!3m2!1sro!2sro!4v1683204886213!5m2!1sro!2sro" 
        width="100%" 
        height="500px" 
        allowfullscreen=""
         loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="location_tag">
            <div>
                Location
            </div>
        </div>
        </div>
    )
}

export default Location;
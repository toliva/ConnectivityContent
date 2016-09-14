var hotelAssignmentServiceBaseUrl = "https://hotel-assignment-service.test.expedia.com";

var hotelAssignmentServiceUrls = {
    login: hotelAssignmentServiceBaseUrl + "/v1/properties/login",
    schedule: hotelAssignmentServiceBaseUrl + "/v1/schedule",
    factors: hotelAssignmentServiceBaseUrl + "/v1/hotels/factors",
    assign: hotelAssignmentServiceBaseUrl + "/v1/schedule/assign",
    login: hotelAssignmentServiceBaseUrl + "/v1/properties/login",
    login: hotelAssignmentServiceBaseUrl + "/v1/properties/login",

    scheduleHotel: function(hotelId) {
        return hotelAssignmentServiceUrls.schedule + "/hotelId/" + hotelId;
    },

    scheduleExtend: function(hotelId) {
        return hotelAssignmentServiceUrls.scheduleHotel(hotelId) + "/extend";
    }
}
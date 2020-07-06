const GameState = Object.freeze({
    WELCOME:   Symbol("welcome"),
    CONTINUE:  Symbol("continue"),
    BUDGET_SELECTION: Symbol("budget_selection"),
    MEMBER_STATUS: Symbol("member_status"),
    TRAVEL_MODE_SELECTION: Symbol("travel_mode_selection"),
    INSURANCE_SELECTION: Symbol("insurance_selection"),
    ROOM_SELECTION: Symbol("room_selection"),
    MEAL_SELECTION: Symbol("meal_selection"),
    ROOM_SERVICE_SELECTION: Symbol("room_service_selection"),
    CAR_RENTAL_SELECTION: Symbol("car_rental_selection"),
    GUIDE_SELECTION: Symbol("guide_selection"),
});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOME;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOME:
                sReply = "Welcome to the Falcon Tours and Travels, We make your Destination travel plan. \n \n" + "Do you want to CONTINUE or go BACK?";
                this.stateCur = GameState.CONTINUE;
                break;
            case GameState.CONTINUE:
                if(sInput.toLowerCase().match("continue")){
                    sReply = "Please select your budget from below options. \n" + 
                    "A - Below $1000.00\n" + 
                    "B - Above $1000.00 and below $1500.00\n" +
                    "C - Above $1500.00 and below $3000.00\n" +
                    "d - Above $3000.00 and below $5000.00\n \n" + 
                    "Write the option (A, B, C or D) to select the budget";
                    this.stateCur = GameState.BUDGET_SELECTION;
                }else{
                    sReply ="Thanks for visiting Falcon Tours and Travels. Hope to see you again !";   
                    this.stateCur = GameState.WELCOME;
                }
                break;
            case GameState.BUDGET_SELECTION:
                if(sInput.toLowerCase().match("a")){
                    sReply = "You have selected your budget as below $1000.00. \n \n" +
                        "Are you planning to go as a FAMILY, COUPLE or INDIVIDUAL?";
                    this.stateCur = GameState.MEMBER_STATUS;
                }else if(sInput.toLowerCase().match("b")){
                    sReply = "You have selected your budget as above $1000.00 and below $1500.00. \n \n" +
                        "Are you planning to go as a FAMILY, COUPLE or INDIVIDUAL?";
                    this.stateCur = GameState.MEMBER_STATUS;
                }else if(sInput.toLowerCase().match("c")){
                    sReply = "You have selected your budget as above $1500.00 and below $3000.00. \n \n" +
                        "Are you planning to go as a FAMILY, COUPLE or INDIVIDUAL?";
                    this.stateCur = GameState.MEMBER_STATUS;    
                }else if(sInput.toLowerCase().match("d")){
                    sReply = "You have selected your budget as above $3000.00 and below $5000.00. \n \n" +
                        "Are you planning to go as a FAMILY, COUPLE or INDIVIDUAL?";
                    this.stateCur = GameState.MEMBER_STATUS;    
                }else{
                    sReply = "You seem to have provided the wrong choice. Can you do it again from beginning?";
                    this.stateCur = GameState.CONTINUE;
                }
                break;
            case GameState.MEMBER_STATUS:
                if(sInput.toLowerCase().match("family")){
                    sReply = "You are going on a tour with your Family \n \n" +
                    "Which travel mode you want to prefer \n"+ "BUS, PLANE or TRAIN?";
                    this.stateCur = GameState.TRAVEL_MODE_SELECTION;
                }else if(sInput.toLowerCase().match("couple")){
                    sReply = "Ohh! that's fun, You are going on a tour with your partner \n \n" +
                    "Which travel mode you want to prefer \n"+ "BUS, PLANE or TRAIN?";
                    this.stateCur = GameState.TRAVEL_MODE_SELECTION;
                }else if(sInput.toLowerCase().match("individual")){
                    sReply = "You are going on a solo tour. \n \n" +
                    "Which travel mode you want to prefer \n"+ "BUS, PLANE or TRAIN?";
                    this.stateCur = GameState.TRAVEL_MODE_SELECTION;
                }else{
                    sReply = "You seem to have provided the wrong choice. Can you do it again from beginning?";
                    this.stateCur = GameState.WELCOME;
                }
                break;
            case GameState.TRAVEL_MODE_SELECTION:
                if(sInput.toLowerCase().match("bus")){
                    sReply = "Your travel mode will be via bus. \n \n" +
                    "Do you want to include your travel insurance, \n" + "YES or NO ?";
                    this.stateCur = GameState.INSURANCE_SELECTION;
                }else if(sInput.toLowerCase().match("plane")){
                    sReply = "Your travel mode will be via plane. \n \n" +
                    "Do you want to include your travel insurance, \n" + "YES or NO ?";
                    this.stateCur = GameState.INSURANCE_SELECTION;
                }else if(sInput.toLowerCase().match("car")){
                    sReply = "Your travel mode will be via car. \n \n" +
                    "Do you want to include your travel insurance, \n" + "YES or NO ?";
                    this.stateCur = GameState.INSURANCE_SELECTION;
                }else{
                    sReply = "You seem to have provided the wrong choice. Can you do it again from beginning?";
                    this.stateCur = GameState.WELCOME;
                }
                break;
            case GameState.INSURANCE_SELECTION:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Your travel insurance will be added exclusively in your budget. \n \n" +
                    "Which type of room you want ? \n" + 
                    "A - Normal room\n" + 
                    "B - Deluxe Room\n" +
                    "C - Super Deluxe Room\n" +
                    "D - Luxury suite\n \n" + 
                    "Write the option (A, B, C or D) to select your room type";
                    this.stateCur = GameState.ROOM_SELECTION;
                }else if(sInput.toLowerCase().match("plane")){
                    sReply = "Your travel insurance will not be added in your budget. \n \n" +
                    "Which type of room you want ? \n" + 
                    "A - Normal room\n" + 
                    "B - Deluxe Room\n" +
                    "C - Super Deluxe Room\n" +
                    "D - Luxury suite\n \n" + 
                    "Write the option (A, B, C or D) to select your room type";
                    this.stateCur = GameState.ROOM_SELECTION;
                }else{
                    sReply = "You seem to have provided the wrong choice. Can you do it again from beginning?";
                    this.stateCur = GameState.WELCOME;
                }
                break;
            case GameState.ROOM_SELECTION:
                if(sInput.toLowerCase().match("a")){
                    sReply = "You have selected Normal Room. \n \n" +
                    "Which type of Meal Plane you want ? \n" + 
                    "A - Only Breakfast\n" + 
                    "B - Breakfast and Lunch\n" +
                    "C - Lunch and Snack\n" +
                    "D - Brunch and Snack\n" + 
                    "E - Lunch and Dinner\n" +
                    "F - All meals\n \n" +
                    "Write the option (A, B, C, D or E) to select your meal type";
                    this.stateCur = GameState.MEAL_SELECTION;
                }else if(sInput.toLowerCase().match("b")){
                    sReply = "You have selected Deluxe Room. \n \n" +
                    "Which type of Meal Plane you want ? \n" + 
                    "A - Only Breakfast\n" + 
                    "B - Breakfast and Lunch\n" +
                    "C - Lunch and Snack\n" +
                    "D - Brunch and Snack\n" + 
                    "E - Lunch and Dinner\n" +
                    "F - All meals\n \n" +
                    "Write the option (A, B, C, D or E) to select your meal type";
                    this.stateCur = GameState.MEAL_SELECTION;
                }else if(sInput.toLowerCase().match("c")){
                    sReply = "You have selected Super Deluxe Room. \n \n" +
                    "Which type of Meal Plane you want ? \n" + 
                    "A - Only Breakfast\n" + 
                    "B - Breakfast and Lunch\n" +
                    "C - Lunch and Snack\n" +
                    "D - Brunch and Snack\n" + 
                    "E - Lunch and Dinner\n" +
                    "F - All meals\n \n" +
                    "Write the option (A, B, C, D or E) to select your meal type";
                    this.stateCur = GameState.MEAL_SELECTION;
                }else if(sInput.toLowerCase().match("d")){
                    sReply = "You have selected Luxury Suite. \n \n" +
                    "Which type of Meal Plane you want ? \n" + 
                    "A - Only Breakfast\n" + 
                    "B - Breakfast and Lunch\n" +
                    "C - Lunch and Snack\n" +
                    "D - Brunch and Snack\n" + 
                    "E - Lunch and Dinner\n" +
                    "F - All meals\n \n" +
                    "Write the option (A, B, C, D, E or F) to select your meal type";
                    this.stateCur = GameState.MEAL_SELECTION;
                }else{
                    sReply = "You seem to have provided the wrong choice. Can you do it again from beginning?";
                    this.stateCur = GameState.WELCOME;
                }
                break;
            case GameState.MEAL_SELECTION:
                if(sInput.toLowerCase().match("a")){
                    sReply = "You have selected Only Breakfast as your meal plan. \n \n" +
                    "Do you want 24*7 Room Service\n" + "YES or NO ?";
                    this.stateCur = GameState.ROOM_SERVICE_SELECTION;
                }else if(sInput.toLowerCase().match("b")){
                    sReply = "You have selected Breakfast and Lunch as your meal plan. \n \n" +
                    "Do you want 24*7 Room Service\n" + "YES or NO ?";
                    this.stateCur = GameState.ROOM_SERVICE_SELECTION;
                }else if(sInput.toLowerCase().match("c")){
                    sReply = "You have selected Lunch and Snack as your meal plan. \n \n" +
                    "Do you want 24*7 Room Service\n" + "YES or NO ?";
                    this.stateCur = GameState.ROOM_SERVICE_SELECTION;
                }else if(sInput.toLowerCase().match("d")){
                    sReply = "You have selected Brunch and Snack as your meal plan. \n \n" +
                    "Do you want 24*7 Room Service\n" + "YES or NO ?";
                    this.stateCur = GameState.ROOM_SERVICE_SELECTION;
                }else if(sInput.toLowerCase().match("e")){
                    sReply = "You have selected Lunch and Dinner as your meal plan. \n \n" +
                    "Do you want 24*7 Room Service\n" + "YES or NO ?";
                    this.stateCur = GameState.ROOM_SERVICE_SELECTION;
                }else if(sInput.toLowerCase().match("f")){
                    sReply = "You have selected all the meals. \n \n" +
                    "Do you want 24*7 Room Service\n" + "YES or NO ?";
                    this.stateCur = GameState.ROOM_SERVICE_SELECTION;
                }else{
                    sReply = "You seem to have provided the wrong choice. Can you do it again from beginning?";
                    this.stateCur = GameState.WELCOME;
                }
                break;
            case GameState.ROOM_SERVICE_SELECTION:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "You have selected 24*7 Room Service. \n \n" +
                    "Do you want Car Rental Service at your destination\n" + "YES or NO ?";
                    this.stateCur = GameState.CAR_RENTAL_SELECTION;
                }else if(sInput.toLowerCase().match("no")){
                    sReply = "You have not selected 24*7 Room Service. \n \n" +
                    "Do you want Car Rental Service at your destination\n" + "YES or NO ?";
                    this.stateCur = GameState.CAR_RENTAL_SELECTION;
                }else{
                    sReply = "You seem to have provided the wrong choice. Can you do it again from beginning?";
                    this.stateCur = GameState.WELCOME;
                }
                break;
            case GameState.CAR_RENTAL_SELECTION:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "You will be getting Car Rental Service at your destination. \n \n" +
                    "Do you want a personal Guide at your destination\n" + "YES or NO ?";
                    this.stateCur = GameState.GUIDE_SELECTION;
                }else if(sInput.toLowerCase().match("no")){
                    sReply = "You will be exploring places with your own vehicle or public transport at your destination. \n \n" +
                    "Do you want a personal Guide at your destination\n" + "YES or NO ?";
                    this.stateCur = GameState.GUIDE_SELECTION;
                }else{
                    sReply = "You seem to have provided the wrong choice. Can you do it again from beginning?";
                    this.stateCur = GameState.WELCOME;
                }
                break;
            case GameState.GUIDE_SELECTION:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "You will be provided with a guide at your destination. \n \n" + 
                    "HURRAAAAHHHH!!!!!!, now you are going on a tour. \n" +
                    "Hope you liked the game very much."
                }else if(sInput.toLowerCase().match("no")){
                    sReply = "You will exploring places at your own. \n \n" + 
                    "HURRAAAAHHHH!!!!!!, now you are going on a tour. \n" +
                    "Hope you liked the game very much."
                }else{
                    sReply = "You seem to have provided the wrong choice. Can you do it again from beginning?";
                    this.stateCur = GameState.WELCOME;
                }
                break;
        }
        return([sReply]);
    }
}
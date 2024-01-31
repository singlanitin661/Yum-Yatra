import { useEffect, useState } from "react";
import { MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY, swiggy_menu_api_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await data.json();
        const restaurantData =
            json.data?.cards
                ?.map((x) => x.card)
                ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
                ?.info || null;
        setRestaurant(restaurantData);

        // Set menu item data
        const menuItemsData =
            json.data?.cards
                .find((x) => x.groupedCard)
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
                ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
                ?.map((x) => x) || [];



        setMenuItems(menuItemsData);
    }

    return [restaurant, menuItems];
}
export default useRestaurantMenu;
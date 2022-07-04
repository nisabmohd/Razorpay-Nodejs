import { Item } from "../components/Item"

function Shop() {
    return (
        <div className="shop" style={{ display:'flex',flexDirection:'row',justifyContent:'space-evenly',flexGrow:'wrap',width:'50%',margin:'auto',marginTop:'9vh'}}>
            <Item id="545dfdf8783w423" name="Fossil Watch" img="https://rukminim1.flixcart.com/image/880/1056/l1jmc280/watch/6/f/u/1-stylish-grey-sports-men-watches-multifunctional-skmei-men-original-imagd2wrcy6zuvsf.jpeg?q=50" price="1999" />
            <Item id="fghffg654646757"  name="MRF Bat" img="https://rukminim1.flixcart.com/image/416/416/k186fm80/bat/9/f/n/1000-1200-short-handle-endorsed-for-light-hard-tennis-ball-with-original-imafkuuyxrrphkbr.jpeg?q=70" price="999" />
        </div>
    )
}

export default Shop
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export function Item(props) {
    const handleCheckOut = async () => {
        fetch(`${process.env.React_App_url}/payment/checkout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                itemid: props.id,
                amount: props.price
            }),
        })
            .then(response => response.json())
            .then(data => {
                const options = {
                    key: process.env.React_App_Key,
                    amount: data.amount,
                    currency: "INR",
                    name: "Nisab Mohd",
                    description: "Test Transaction",
                    image: "https://avatars.githubusercontent.com/u/76525761?v=4",
                    order_id:data.id,
                    callback_url: "http:localhost:8000/payment/paymentverf",
                    prefill: {
                        name: "John Lackner",
                        email: "lacknerjohn@example.com",
                        contact: "9999999999"
                    },
                    notes: {
                        "address": "Razorpay Corporate Office"
                    },
                    theme: {
                        "color": "#453D3B"
                    }
                };
                const razor = new window.Razorpay(options);
                razor.open()
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="340"
                image={props.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography gutterBottom variant="p" style={{ fontSize: '17px' }} component="div">
                    ₹{props.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione non sequi, culpa alias dicta adipis
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => handleCheckOut()} size="small">Buy Now</Button>
            </CardActions>
        </Card>
    )
}

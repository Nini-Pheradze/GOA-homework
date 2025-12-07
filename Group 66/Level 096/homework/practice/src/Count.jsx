import { useState, useEffect } from "react";


function Count() {
    // შექმენით ერთი მდგომარეობა count, ღილაკზე დაჭერისას გაზარდეთ count - მდგომარეობა 1 - ით, როდესაც count მდგომარეობა გაუტოლდება 7 - ს alert - ის დახმარებით გამოიტანეთ 'Lucky number' ეს უნდა გააკეთოთ useEffect - კაუჭის გამოყენებით

    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 7) {
            alert('Lucky number!');
        }
    }, [count]);

    return (
        <div>
            <p>Wow, you've clicked that button: {count} times</p>
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    )
}

export default Count
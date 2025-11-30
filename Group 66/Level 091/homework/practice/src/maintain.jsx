import './maintain.css'

function Maintain() {
    return (
        <>
            {/* შექმენით მთავარი კომპონენტი, გასტილეთ ის external css - ის გამოყენებით, მოიძეთ ინფორმაცია თუ როგორ ხდება React - ში external css - ის გამოყენება, შეგიძლიათ დაყოთ პატარ-პატარა კომპონენტებად და საბოლოოდ გამოიძახოთ ისინი App კომპონენტში */}

            <div className="main-div">
                <div className="child-div">
                    <h1 className="title">Mercedes-Benz</h1>
                    <img 
                        src="https://images.netdirector.co.uk/gforces-auto/image/upload/w_412,h_309,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/1bba97200583cad7b2285432ec4a3d70/01_s_class_nautic_blue_metallic_f2.png" 
                        alt="S-Class" 
                        className="image"
                    />
                    <div className="text-box">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur expedita eveniet aperiam!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Maintain
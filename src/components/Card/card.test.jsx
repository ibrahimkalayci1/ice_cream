import { render, screen } from "@testing-library/react"
import Card from "."
import  userEvent  from '@testing-library/user-event'

//prop olarak gönderilecek item
  const item = {
        name: "Chocolate",
        imagePath: "/images/chocolate.png",
        id: "c02b",
        };


        //prop olarak gönderilecek basket
         const basket = [
            {
                name: "Chocolate",
                imagePath: "/images/chocolate.png",
                id: "c02b",
                amount: 3,
            },
            {
                name: "Vanilla",
                imagePath: "/images/vanilla.png",
                id: "1239",
                amount: 1,
            },
        ];

        //çikolatasız sepet
        const otherBasket = [
            {
                name: "Vanilla",
                imagePath: "/images/vanilla.png",
                id: "1239",
                amount: 3,
            },
        ]

//!prop olarak veri alan bir bileşeni test ediyorsak 
//!bileşenin aldığı propları test ortamındada göndermemiz lazım
test ("Miktar, başlık,fotoğraf gelen propa göre ekrana basılır", 
    () => {
        render
        (<Card 
            item={item} 
            addToBasket={() => {}}
            removeFromBasket={() => {}}
            basket={basket}
            />
        );

        //miktar spanını çağır
        const amount = screen.getByTestId("amount")
       
        //span içeriği 3 mü
        expect(amount).toHaveTextContent(/^3$/)
       
        //chocolate yazısı ekraa geldimi kontrol et
       
        // getby elementi bulamazsa hata fırlatır bu yuzden sadece "x"
         //yazı içeriğine sahip element ekranda mı kontrolü yapmak 
         //istiyorsak getbytext ile çagrmk yeterlidir daha
         //sonrasında expect kullanmaya gerek kalmaz
        screen.getByText("Chocolate")
       
        //resim elementini çağır
        const img = screen.getByAltText("çeşit-resim")
        //resim kaynağı doğrumu kontrol et
        expect(img).toHaveAttribute("src", "/images/chocolate.png")
});

test("butonlara tıklayınca fonksiyonlar doğru parametreler ile çalışır", async () => {

    const user = userEvent.setup()

    //! prop olarak gönderilecek fonksiyonları test edeceksek 
    //!jest aracılığı (mock) ile test edilebilir fonksiyonlar oluştur

            const addMockFn = jest.fn();
            const removeMockFn = jest.fn();

        //test edilecek bileşeni renderla
        render(
            <Card 
            item={item}
            basket={basket}
            addToBasket= {addMockFn}
            removeFromBasket={removeMockFn}
            />
        );
            //butonları al
            const addBtn = screen.getByRole("button", { name: /ekle/i });
            const delBtn = screen.getByRole("button", { name: /azalt/i });
            
            //ekle butonuna tıkla
            await user.click(addBtn);
            
            //addToBasket methodu doğru parametreler ile çalıştımı
            expect(addMockFn).toHaveBeenCalledWith(item);
            
            //azalt butonuna tıkla
            await user.click(delBtn)
            
            //removeFromBasket methodu doğru parametreler ile çalıştımı
            expect(removeMockFn).toHaveBeenCalledWith(item.id);


});
// describe aynı işlevin testlerini bir araya getirmek için kullandgmz bir nevi testleri kategorize eder
describe("azalt butonunun aktiflik testleri", () => {
    it("sepette aynı item'dan varsa buton aktiftir", () => {
        render(<Card item={item} basket={basket} />);
        
        const button = screen.getByRole("button", { name: "Azalt"})
        
        expect(button).toBeEnabled();
    });

    it("sepette aynı item'dan yoksa buton inaktiftir", () => {
        render(<Card item={item} basket={otherBasket} />);
        
        const button = screen.getByRole("button", { name: "Azalt"});
    
        expect(button).toBeDisabled();
    });
});

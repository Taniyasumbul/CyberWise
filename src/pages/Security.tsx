import SecurityTips from "@/components/SecurityTips"
import ToolRecommendations from "@/components/ToolRecommendations"
import  Header  from "@/components/Header"
import Footer  from "@/components/Footer"




function Security() {
   

    return (
        <>
        <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
        <ToolRecommendations/>
        <SecurityTips/>
        </main>
        <Footer />
        </div>
        </>
    )
}

export default Security

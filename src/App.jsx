import React from 'react'
import Card from './Card';


function App() {
  let data=[
    {
    plan:"free",
    price:"$0",
    userfont:true,
    userenabler:true,
    user:"single Users",
    storagefont:true,
    storageenabler:true,
    storage:"5GB Storage",
    projectfont:true,
    projectenabler:true,
    project:"Unlimited Public Projects",
    accessfont:true,
    accessenabler:true,
    access:"Community Access",
    privatefont:false,
    privateenabler:false,
    privateproject:"Unlimited Private Projects",
    supportfont:false,
    supportenabler:false,
    support:"Dedicated Phone Support",
    subdomainfont:false,
    subdomainenabler:false,
    subdomains:"free subdomain",
    reportfont:false,
    reportenabler:false,
    statusreport:"Monthly Status Reports"},
    
      {
        plan:"plus",
        price:"$9",
        userfont:true,
        userenabler:true,
        user:"5 Users",
        storagefont:true,
        storageenabler:true,
        storage:"50GB Storage",
        projectfont:true,
        projectenabler:true,
        project:"Unlimited Public Projects",
        accessfont:true,
        accessenabler:true,
        access:"Community Access",
        privatefont:true,
        privateenabler:true,
        privateproject:"Unlimited Private Projects",
        supportfont:true,
        supportenabler:true,
        support:"Dedicated Phone Support",
        subdomainfont:true,
        subdomainenabler:true,
        subdomains:"free subdomain",
        reportfont:false,
        reportenabler:false,
        statusreport:"Monthly Status Reports"},
        {
          plan:"Pro",
          price:"$49",
          userfont:true,
          userenabler:true,
          user:"Unlimited Users",
          storagefont:true,
          storageenabler:true,
          storage:"150GB Storage",
          projectfont:true,
          projectenabler:true,
          project:"Unlimited Public Projects",
          accessfont:true,
          accessenabler:true,
          access:"Community Access",
          privatefont:true,
          privateenabler:true,
          privateproject:"Unlimited Private Projects",
          supportfont:true,
          supportenabler:true,
          support:"Dedicated Phone Support",
          subdomainfont:true,
          subdomainenabler:true,
          subdomains:"Unlimited",
          reportfont:true,
          reportenabler:true,
          statusreport:"Monthly Status Reports"}
    
        ];
  return  <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
    data.map((e,i)=>{
       return <Card key={i} data={e}/>

     })
    }
    </div>
  </div>
</section>
  </>
  
}

export default App
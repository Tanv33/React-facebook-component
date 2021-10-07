import "./App.css";
import FacebookPost from "./components/FacebookPost";

function App() {
  return (
    <>
      <h1 style={{textAlign:"center",margin:"10px 20px",color:"#c51162"}} >React Facebook Component</h1>
    <div style={{display:"flex",flexWrap:"wrap",width:"100%",justifyContent:"center"}}>
      <FacebookPost
        title="Nike"
        subHeader="10 mins ago"
        smallImg="https://media.istockphoto.com/photos/3d-render-lightning-electric-power-symbol-retro-neon-glowing-sign-on-picture-id1043738742?b=1&k=20&m=1043738742&s=170667a&w=0&h=ensqbjc_9FT_v41HILOUhwZxfIAw2t1guR2iQLF5J_8="
        mainImg="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        content="The new sneakers will be available to select Nike members in its largest markets at a retail price of $120, starting Feb. 15. Later, the shoes will be sold more broadly."
      />

      <FacebookPost
        title="Ford"
        subHeader="1 hours ago"
        smallImg="https://images.unsplash.com/photo-1589981941324-27c29919de98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80"
        mainImg="https://images.unsplash.com/photo-1551830820-330a71b99659?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        content="Starting at $29,290 .The all-new F-150 is purpose-built from the ground up — redesigned to be the toughest, most productive F-150 ever. This is what happens when you merge premium-grade muscle with finely tuned intelligence and design."
      />
      <FacebookPost
        title="Dell"
        subHeader="12 hours ago"
        smallImg="https://images.unsplash.com/photo-1625929724273-b441811ff086?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        mainImg="https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
        content="Dell Inspiron 15 3000 is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i3 processor and it comes with 8GB of RAM. The Dell Inspiron 15 3000 packs 256GB of HDD storage."
      />
      <FacebookPost
        title="Nike"
        subHeader="18 hours ago"
        smallImg="https://media.istockphoto.com/photos/3d-render-lightning-electric-power-symbol-retro-neon-glowing-sign-on-picture-id1043738742?b=1&k=20&m=1043738742&s=170667a&w=0&h=ensqbjc_9FT_v41HILOUhwZxfIAw2t1guR2iQLF5J_8="
        mainImg="https://media.istockphoto.com/photos/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-picture-id1303978937?b=1&k=20&m=1303978937&s=170667a&w=0&h=az5Y96agxAdHt3XAv7PP9pThdiDpcQ3otWWn9YuJQRc="
        content="The new sneakers will be available to select Nike members in its largest markets at a retail price of $120, starting Feb. 15. Later, the shoes will be sold more broadly."
      />
      <FacebookPost
        title="Ford"
        subHeader="19 hours ago"
        smallImg="https://images.unsplash.com/photo-1589981941324-27c29919de98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80"
        mainImg="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmQlMjBjYXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        content="Starting at $29,290 .The all-new F-150 is purpose-built from the ground up — redesigned to be the toughest, most productive F-150 ever. This is what happens when you merge premium-grade muscle with finely tuned intelligence and design."
      />
      <FacebookPost
        title="Dell"
        subHeader="22 hours ago"
        smallImg="https://images.unsplash.com/photo-1625929724273-b441811ff086?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        mainImg="https://images.unsplash.com/photo-1558864559-ed673ba3610b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGVsbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        content="Dell Inspiron 15 3000 is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i3 processor and it comes with 8GB of RAM. The Dell Inspiron 15 3000 packs 256GB of HDD storage."
      />
      <FacebookPost
        title="Nike"
        subHeader="1 day ago"
        smallImg="https://media.istockphoto.com/photos/3d-render-lightning-electric-power-symbol-retro-neon-glowing-sign-on-picture-id1043738742?b=1&k=20&m=1043738742&s=170667a&w=0&h=ensqbjc_9FT_v41HILOUhwZxfIAw2t1guR2iQLF5J_8="
        mainImg="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
        content="The new sneakers will be available to select Nike members in its largest markets at a retail price of $120, starting Feb. 15. Later, the shoes will be sold more broadly."
      />
      <FacebookPost
        title="Ford"
        subHeader="4 days ago"
        smallImg="https://images.unsplash.com/photo-1589981941324-27c29919de98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80"
        mainImg="https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        content="Starting at $29,290 .The all-new F-150 is purpose-built from the ground up — redesigned to be the toughest, most productive F-150 ever. This is what happens when you merge premium-grade muscle with finely tuned intelligence and design."
      />
      <FacebookPost
        title="Dell"
        subHeader="10 days ago"
        smallImg="https://images.unsplash.com/photo-1625929724273-b441811ff086?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
        mainImg="https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlbGx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        content="Dell Inspiron 15 3000 is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i3 processor and it comes with 8GB of RAM. The Dell Inspiron 15 3000 packs 256GB of HDD storage."
      />
    </div>
    </>
  );
}

export default App;

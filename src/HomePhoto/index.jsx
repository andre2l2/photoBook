import React from 'react';

import './style.css';

function HomePhoto() {
    return(
        <section>
            <div className="description">
                <h1>
                    Photo<span className="line">Book</span>
                </h1>
                <p>
                    Welcome to my photo book. <br/>
                    My name is André Ferreira. <br/> 
                    I create this book to show you all.
                </p>
            </div>
            <div className="images">
                <div>
                    <img src="https://instagram.fssz2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.0.1079.1079a/s640x640/50628712_409688692926073_4329597168304332594_n.jpg?_nc_ht=instagram.fssz2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=AcTp8WVVgKoAX-ejV_b&oh=a03db8b2623e234a977df88cd05de5b5&oe=5F7EFA94"/>
                </div>
                <div>
                    <img src="https://instagram.fssz2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c135.0.810.810a/s640x640/47582453_327278098119552_3154501865466197740_n.jpg?_nc_ht=instagram.fssz2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=GJqgka3AQ_wAX-aw75C&oh=19a5f7c137119964555001f67763cc25&oe=5F7EBF35"/>
                </div>
                <div>
                    <img src="https://instagram.fssz2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c135.0.810.810a/s640x640/50676797_758810874482661_5924710224778708705_n.jpg?_nc_ht=instagram.fssz2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=jOb10CiH8QgAX83_W1h&oh=437f7317bea3e3e9450813f6f35bec8b&oe=5F7F1E4D"/>
                </div>
            </div>
        </section>
    )
}

export default HomePhoto;
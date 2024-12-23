import { PlayCircleFilled, HeartFilled } from '@ant-design/icons';
import { Button, message } from 'antd';
import _ from 'lodash';
import { useToggleFavoriteSong, useUserInfo } from '../../react-query';

import { FavoriteIcon } from '../Icons';

import styles from './styles/SongBlock.module.css';

export default function SongBlock({ song }) {

    const info = () => {
        message.info('Add To Favorites');
      }
   

    const { mutate } = useToggleFavoriteSong();
   const { data: userInfo } = useUserInfo() || {};
   const favorites = userInfo.favorites || [];
   let isFavorite = _.includes(favorites, song.id);
   const toggleFavorite = () => {
      if (!!userInfo?.uid)
         mutate({ songId: song.id, uid: userInfo?.uid })
   }
    console.log(userInfo.id);
    return (
        <>
            <div className={styles.musicItem}><img src={song.URL} className={styles.musicImg}/>
                <Button className={styles.playBtns} type="text" size="large" onClick={() => { }} >
                    <PlayCircleFilled style={{ fontSize: '25px', verticalAlign: "1px" }} />
                </Button>
            </div>
            <div className={styles.titleBar}>
                <p style={{ marginTop: "-4px", marginBottom: "0", color: "#efeef7",fontSize: '27px' }} >{song.Name}</p>
                <Button onClick={info}><FavoriteIcon color={isFavorite ? '#F19D38' : '#000000'} style={{ fontSize: '10px'}} /></Button>
            </div>

            <p style={{ color: "#efeef7", paddingLeft: "10px" }}>{song.Author}</p>
        </>
    );
};


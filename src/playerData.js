import shintaro from '../public/image/player_image_001.jpg'
import inoue from '../public/image/image1_inoue_naoya.png'
import picasso from '../public/image/image2_alan_picasso.png'


//　プレイヤーデータ
export const PLAYER = {
    image_src: shintaro,
    profile: {
        handle_name: "しんたろー",
        age: 27,
        introduction: "<p>その爽やかな語り口と裏腹に鋭い情報分析力と論理的な厳格さを兼ね備えたプレイヤー。<br />スタイルは「冷静な理論派ハンター」と評されます。<br />感情に流されることなく、盤面を整理し、一貫したロジックで人外（人狼陣営）を追い詰める！</p>"
    },
    stats: {
        Impact: 92,
        Structure: 95,
        Insight: 91,
        Logic: 98,
        Originality: 87,
        Instinct: 86,
    }
}

export const PLAYERS = [
    {
        image_src: inoue,
        profile: {
            handle_name: "井上尚弥",
            age: 32,
            introduction: ""
        },
        stats: {
            Impact: 100,
            Structure: 100,
            Insight: 100,
            Logic: 100,
            Originality: 100,
            Instinct: 100,
        }

    },
    {
        image_src: picasso,
        profile: {
            handle_name: "アラン・ピカソ",
            age: 25,
            introduction: ""
        },
        stats: {
            Impact: 100,
            Structure: 100,
            Insight: 100,
            Logic: 100,
            Originality: 100,
            Instinct: 100,

        }

    }
]


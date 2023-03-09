import {Text,Box} from "@chakra-ui/react";

export default function Index () {
    return (
        <>
            <div style={{display: 'flex'}}>
                <div style={{margin: 10}}>
                    <BlogBackLink link={'../'} text={'Home'}/>
                </div>
                <div style={{margin: 10}}>
                    <Text fontSize={25}>/</Text>
                </div>
                <div style={{margin: 10}}>
                    <Text fontSize={25}>blog</Text>
                </div>
                <div style={{margin: 10}}>
                    <Text fontSize={25}>/</Text>
                </div>
                <div style={{margin: 10}}>
                    <BlogBackLink link={'/'} text={'2023-03'}/>
                </div>
            </div>
            <Box p={10}>
                <h1>Hello!(Japanese blog)</h1>
                <h3>Edit by NknightAMAMIYA - VARIUS owner</h3>
                <Box style={{whiteSpace:"pre-wrap"}}>
                    <Text fontSize={22}>{`   みなさんこんばんは、あまみやです。VARIUSのブログをご覧いただきありがとうございます。`}</Text>
                    <Text fontSize={22}>{`本当はこのブログも英語で書こうかと思ったんですが、英訳が面倒なのと正確に翻訳できる自信がなかったので日本語で書きます(笑)s`}</Text>
                    <Text fontSize={22}>{`当サイトはWeb3やWeb5の開発者やクリエイターの方々に向けて、プラグイン等の提供による活動の手助けになればと思いつくりました。`}</Text>
                    <Text fontSize={42}>{`これからやりたいこと`}</Text>
                    <Text fontSize={22}>{` このサイトのロードマップに関しては、現在ProjectVとユーザー管理システム、それから各種アプリケーションのフォーマット決めを行っており最終的には今年の秋頃の本格リリースをめざしております。`}</Text>
                    <Text fontSize={22}>{`まだこのサイトも不完全な部分もありますが、これからも制作を頑張って行きますので応援よろしくお願い致しますm( _ _ ;)m`}</Text>
                    <Text fontSize={22}>{`資金提供や開発のお手伝いも随時募集中です。`}</Text>
                    <Text fontSize={22}>{`　　　`}</Text>
                    <Text fontSize={22}>{`　　　`}</Text>
                    あまみや
                </Box>
            </Box>
        </>
    )
}

export const BlogBackLink = ({link,text}:any) => {
    return (
        <a href={link} style={{color: 'black', fontSize: 25}}>{text}</a>
    )
}
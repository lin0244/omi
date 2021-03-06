import Omi from '../../common/omi.js';

class Header extends Omi.Component {
    constructor (data) {
        super(data);
    }

    style () {
        return `
        .head{
            height:45px;
            line-height: 45px;
            border-bottom: 1px solid #eee;
            width:100%;
            background-color:#303030;
            z-index:100;
            text-align:left;
        }

        ul,li{
            display: inline-block;
        }

        .logo_box{
            width:100px;
            display: inline-block;
            text-align:center;
            line-height: 60px;
        }

        .menu a,.logo_box a{
            display: inline-block;
            height:45px;
            color:#ddd;
        }

        .logo_box a{
            background:#303030 url(`+( Root.isDev?'./component/header/omi.png':(Root.CDN+'/component/header/omi.png'))+`) no-repeat left 11px;
            background-size: contain;
            width: 39px;

        }

        .menu{
            position: absolute;
            right:20px;
        }

        .menu li{
            margin-left:15px;
        }

        .logo_box a{
            font-size: 34px;
            font-weight: bold;
            color: #00bff3;
            padding: 0px 15px;
            line-height: 45px;
            cursor: pointer;
        }

        .menu a:hover{
            color: white;
        }
        `;
    }

    render () {
        return `
    <div class="head bord-btm">
        <div class="logo_box">
            <a href="https://github.com/AlloyTeam/omi"></a>
        </div>
        <ul class="menu">
            <li class="github_li"><a href="https://github.com/AlloyTeam/omi">Github</a>
            <li><a href="http://alloyteam.github.io/omi/example/playground/">Playground</a></li>
            <li><a href="https://github.com/AlloyTeam/omi/tree/master/docs">[Edit the Docs]</a></li>
            </li>
        </ul>
    </div>`;
    }
}

export default Header;
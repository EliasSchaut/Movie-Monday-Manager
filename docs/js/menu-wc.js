'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">MoMoMa Backend Docs</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-e6f7c0d292b378eba8f5ff5f1a58f17a61acd1d73c4d6a1541d23353947652c7959227c72a82baf3cecf2de0a06b96d18dae183009eb94c215f069fa3b592c95"' : 'data-target="#xs-controllers-links-module-AuthModule-e6f7c0d292b378eba8f5ff5f1a58f17a61acd1d73c4d6a1541d23353947652c7959227c72a82baf3cecf2de0a06b96d18dae183009eb94c215f069fa3b592c95"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-e6f7c0d292b378eba8f5ff5f1a58f17a61acd1d73c4d6a1541d23353947652c7959227c72a82baf3cecf2de0a06b96d18dae183009eb94c215f069fa3b592c95"' :
                                            'id="xs-controllers-links-module-AuthModule-e6f7c0d292b378eba8f5ff5f1a58f17a61acd1d73c4d6a1541d23353947652c7959227c72a82baf3cecf2de0a06b96d18dae183009eb94c215f069fa3b592c95"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-e6f7c0d292b378eba8f5ff5f1a58f17a61acd1d73c4d6a1541d23353947652c7959227c72a82baf3cecf2de0a06b96d18dae183009eb94c215f069fa3b592c95"' : 'data-target="#xs-injectables-links-module-AuthModule-e6f7c0d292b378eba8f5ff5f1a58f17a61acd1d73c4d6a1541d23353947652c7959227c72a82baf3cecf2de0a06b96d18dae183009eb94c215f069fa3b592c95"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-e6f7c0d292b378eba8f5ff5f1a58f17a61acd1d73c4d6a1541d23353947652c7959227c72a82baf3cecf2de0a06b96d18dae183009eb94c215f069fa3b592c95"' :
                                        'id="xs-injectables-links-module-AuthModule-e6f7c0d292b378eba8f5ff5f1a58f17a61acd1d73c4d6a1541d23353947652c7959227c72a82baf3cecf2de0a06b96d18dae183009eb94c215f069fa3b592c95"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EmailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PasswordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventModule.html" data-type="entity-link" >EventModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-EventModule-ebd661e9cbfedad9117896689c54fc2fa722c54ee992d7a52a7e11bc77f1f4ed336c48de0014a2a2a1fa4d47385177bf4dd89bcc481409a347d571f8981f6de8"' : 'data-target="#xs-injectables-links-module-EventModule-ebd661e9cbfedad9117896689c54fc2fa722c54ee992d7a52a7e11bc77f1f4ed336c48de0014a2a2a1fa4d47385177bf4dd89bcc481409a347d571f8981f6de8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventModule-ebd661e9cbfedad9117896689c54fc2fa722c54ee992d7a52a7e11bc77f1f4ed336c48de0014a2a2a1fa4d47385177bf4dd89bcc481409a347d571f8981f6de8"' :
                                        'id="xs-injectables-links-module-EventModule-ebd661e9cbfedad9117896689c54fc2fa722c54ee992d7a52a7e11bc77f1f4ed336c48de0014a2a2a1fa4d47385177bf4dd89bcc481409a347d571f8981f6de8"' }>
                                        <li class="link">
                                            <a href="injectables/AnnounceJob.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnnounceJob</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DiscordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscordService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EmailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HistoryJob.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryJob</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WatchListJob.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WatchListJob</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistoryDBModule.html" data-type="entity-link" >HistoryDBModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HistoryDBModule-774c962bcab491bf358fa0c6bcfec157b2eb2c716a04e8b43038bc0904d77ac4e54b190d5babb92f1bf38190a1c7721d9ce8674d8a5a605efb23c24065ddc627"' : 'data-target="#xs-injectables-links-module-HistoryDBModule-774c962bcab491bf358fa0c6bcfec157b2eb2c716a04e8b43038bc0904d77ac4e54b190d5babb92f1bf38190a1c7721d9ce8674d8a5a605efb23c24065ddc627"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HistoryDBModule-774c962bcab491bf358fa0c6bcfec157b2eb2c716a04e8b43038bc0904d77ac4e54b190d5babb92f1bf38190a1c7721d9ce8674d8a5a605efb23c24065ddc627"' :
                                        'id="xs-injectables-links-module-HistoryDBModule-774c962bcab491bf358fa0c6bcfec157b2eb2c716a04e8b43038bc0904d77ac4e54b190d5babb92f1bf38190a1c7721d9ce8674d8a5a605efb23c24065ddc627"' }>
                                        <li class="link">
                                            <a href="injectables/HistoryDBService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryDBService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MovieDBModule.html" data-type="entity-link" >MovieDBModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MovieDBModule-183f7189805a8b24173365c7bf27a8c3640c7c0a1a28fda41ab96789e12befe96caa0bf6df7e8d6bfd4eb46de7537053f9de2387fe491055013f24c8ea286394"' : 'data-target="#xs-injectables-links-module-MovieDBModule-183f7189805a8b24173365c7bf27a8c3640c7c0a1a28fda41ab96789e12befe96caa0bf6df7e8d6bfd4eb46de7537053f9de2387fe491055013f24c8ea286394"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MovieDBModule-183f7189805a8b24173365c7bf27a8c3640c7c0a1a28fda41ab96789e12befe96caa0bf6df7e8d6bfd4eb46de7537053f9de2387fe491055013f24c8ea286394"' :
                                        'id="xs-injectables-links-module-MovieDBModule-183f7189805a8b24173365c7bf27a8c3640c7c0a1a28fda41ab96789e12befe96caa0bf6df7e8d6bfd4eb46de7537053f9de2387fe491055013f24c8ea286394"' }>
                                        <li class="link">
                                            <a href="injectables/MovieDBService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieDBService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MovieModule.html" data-type="entity-link" >MovieModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MovieModule-9d4ef3f7fc3339abaa40fdcd7fedec25f820878adecf9120b86721cab878e80718131f9a371c33a1381c72fd8bea44d33967738fb42d687fe57b0052a72a24b4"' : 'data-target="#xs-controllers-links-module-MovieModule-9d4ef3f7fc3339abaa40fdcd7fedec25f820878adecf9120b86721cab878e80718131f9a371c33a1381c72fd8bea44d33967738fb42d687fe57b0052a72a24b4"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MovieModule-9d4ef3f7fc3339abaa40fdcd7fedec25f820878adecf9120b86721cab878e80718131f9a371c33a1381c72fd8bea44d33967738fb42d687fe57b0052a72a24b4"' :
                                            'id="xs-controllers-links-module-MovieModule-9d4ef3f7fc3339abaa40fdcd7fedec25f820878adecf9120b86721cab878e80718131f9a371c33a1381c72fd8bea44d33967738fb42d687fe57b0052a72a24b4"' }>
                                            <li class="link">
                                                <a href="controllers/MovieController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MovieModule-9d4ef3f7fc3339abaa40fdcd7fedec25f820878adecf9120b86721cab878e80718131f9a371c33a1381c72fd8bea44d33967738fb42d687fe57b0052a72a24b4"' : 'data-target="#xs-injectables-links-module-MovieModule-9d4ef3f7fc3339abaa40fdcd7fedec25f820878adecf9120b86721cab878e80718131f9a371c33a1381c72fd8bea44d33967738fb42d687fe57b0052a72a24b4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MovieModule-9d4ef3f7fc3339abaa40fdcd7fedec25f820878adecf9120b86721cab878e80718131f9a371c33a1381c72fd8bea44d33967738fb42d687fe57b0052a72a24b4"' :
                                        'id="xs-injectables-links-module-MovieModule-9d4ef3f7fc3339abaa40fdcd7fedec25f820878adecf9120b86721cab878e80718131f9a371c33a1381c72fd8bea44d33967738fb42d687fe57b0052a72a24b4"' }>
                                        <li class="link">
                                            <a href="injectables/MovieService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VoteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VoteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserDBModule.html" data-type="entity-link" >UserDBModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserDBModule-7e9269235d4a10fe14071f9d6649cfd85df07377d038a1cb95e8697817ccda098b97e2ca9b1127f09d00630f4e0bae2593c37908281bcc0ccf94a3c564dbc09b"' : 'data-target="#xs-injectables-links-module-UserDBModule-7e9269235d4a10fe14071f9d6649cfd85df07377d038a1cb95e8697817ccda098b97e2ca9b1127f09d00630f4e0bae2593c37908281bcc0ccf94a3c564dbc09b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserDBModule-7e9269235d4a10fe14071f9d6649cfd85df07377d038a1cb95e8697817ccda098b97e2ca9b1127f09d00630f4e0bae2593c37908281bcc0ccf94a3c564dbc09b"' :
                                        'id="xs-injectables-links-module-UserDBModule-7e9269235d4a10fe14071f9d6649cfd85df07377d038a1cb95e8697817ccda098b97e2ca9b1127f09d00630f4e0bae2593c37908281bcc0ccf94a3c564dbc09b"' }>
                                        <li class="link">
                                            <a href="injectables/PasswordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserDBService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserDBService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-8db3dc50abb56bd965e039ec7409c3ecdd88c0f9d1d4fd223cb01fa015979ee5f9ae8b8b6833daf96164cee975acc22f8fa5dbc962f16462c422f61e60bb736a"' : 'data-target="#xs-controllers-links-module-UserModule-8db3dc50abb56bd965e039ec7409c3ecdd88c0f9d1d4fd223cb01fa015979ee5f9ae8b8b6833daf96164cee975acc22f8fa5dbc962f16462c422f61e60bb736a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-8db3dc50abb56bd965e039ec7409c3ecdd88c0f9d1d4fd223cb01fa015979ee5f9ae8b8b6833daf96164cee975acc22f8fa5dbc962f16462c422f61e60bb736a"' :
                                            'id="xs-controllers-links-module-UserModule-8db3dc50abb56bd965e039ec7409c3ecdd88c0f9d1d4fd223cb01fa015979ee5f9ae8b8b6833daf96164cee975acc22f8fa5dbc962f16462c422f61e60bb736a"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-8db3dc50abb56bd965e039ec7409c3ecdd88c0f9d1d4fd223cb01fa015979ee5f9ae8b8b6833daf96164cee975acc22f8fa5dbc962f16462c422f61e60bb736a"' : 'data-target="#xs-injectables-links-module-UserModule-8db3dc50abb56bd965e039ec7409c3ecdd88c0f9d1d4fd223cb01fa015979ee5f9ae8b8b6833daf96164cee975acc22f8fa5dbc962f16462c422f61e60bb736a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-8db3dc50abb56bd965e039ec7409c3ecdd88c0f9d1d4fd223cb01fa015979ee5f9ae8b8b6833daf96164cee975acc22f8fa5dbc962f16462c422f61e60bb736a"' :
                                        'id="xs-injectables-links-module-UserModule-8db3dc50abb56bd965e039ec7409c3ecdd88c0f9d1d4fd223cb01fa015979ee5f9ae8b8b6833daf96164cee975acc22f8fa5dbc962f16462c422f61e60bb736a"' }>
                                        <li class="link">
                                            <a href="injectables/EmailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GravatarService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GravatarService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PasswordService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PasswordService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VoteDBModule.html" data-type="entity-link" >VoteDBModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VoteDBModule-3088840ca75a86dba917c2ad81543228940d87e94202ca6789d29657f574e4d57932433484bc24ac888fad9d793e9579b71eca7adece11fd1b440211684dc160"' : 'data-target="#xs-injectables-links-module-VoteDBModule-3088840ca75a86dba917c2ad81543228940d87e94202ca6789d29657f574e4d57932433484bc24ac888fad9d793e9579b71eca7adece11fd1b440211684dc160"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VoteDBModule-3088840ca75a86dba917c2ad81543228940d87e94202ca6789d29657f574e4d57932433484bc24ac888fad9d793e9579b71eca7adece11fd1b440211684dc160"' :
                                        'id="xs-injectables-links-module-VoteDBModule-3088840ca75a86dba917c2ad81543228940d87e94202ca6789d29657f574e4d57932433484bc24ac888fad9d793e9579b71eca7adece11fd1b440211684dc160"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VoteDBService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VoteDBService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/VoteModule.html" data-type="entity-link" >VoteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-VoteModule-07b969f042f9114b8a04ae5b2d34459a82c47cd76389471d9c65cf84ea87177d37fe04f94188a15196baa4bda36b895830c930df44524cef87c5ddac3d323616"' : 'data-target="#xs-controllers-links-module-VoteModule-07b969f042f9114b8a04ae5b2d34459a82c47cd76389471d9c65cf84ea87177d37fe04f94188a15196baa4bda36b895830c930df44524cef87c5ddac3d323616"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-VoteModule-07b969f042f9114b8a04ae5b2d34459a82c47cd76389471d9c65cf84ea87177d37fe04f94188a15196baa4bda36b895830c930df44524cef87c5ddac3d323616"' :
                                            'id="xs-controllers-links-module-VoteModule-07b969f042f9114b8a04ae5b2d34459a82c47cd76389471d9c65cf84ea87177d37fe04f94188a15196baa4bda36b895830c930df44524cef87c5ddac3d323616"' }>
                                            <li class="link">
                                                <a href="controllers/VoteController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VoteController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-VoteModule-07b969f042f9114b8a04ae5b2d34459a82c47cd76389471d9c65cf84ea87177d37fe04f94188a15196baa4bda36b895830c930df44524cef87c5ddac3d323616"' : 'data-target="#xs-injectables-links-module-VoteModule-07b969f042f9114b8a04ae5b2d34459a82c47cd76389471d9c65cf84ea87177d37fe04f94188a15196baa4bda36b895830c930df44524cef87c5ddac3d323616"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-VoteModule-07b969f042f9114b8a04ae5b2d34459a82c47cd76389471d9c65cf84ea87177d37fe04f94188a15196baa4bda36b895830c930df44524cef87c5ddac3d323616"' :
                                        'id="xs-injectables-links-module-VoteModule-07b969f042f9114b8a04ae5b2d34459a82c47cd76389471d9c65cf84ea87177d37fe04f94188a15196baa4bda36b895830c930df44524cef87c5ddac3d323616"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/VoteService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VoteService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/WatchListDBModule.html" data-type="entity-link" >WatchListDBModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-WatchListDBModule-7f362b017c0204864f93921469f7597a79ddc55ec75e798d0c08db27759438b19898c2ee37f457ccb79599ad8b3c77922f6319a47eb7d436c27e07e2269e602a"' : 'data-target="#xs-injectables-links-module-WatchListDBModule-7f362b017c0204864f93921469f7597a79ddc55ec75e798d0c08db27759438b19898c2ee37f457ccb79599ad8b3c77922f6319a47eb7d436c27e07e2269e602a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WatchListDBModule-7f362b017c0204864f93921469f7597a79ddc55ec75e798d0c08db27759438b19898c2ee37f457ccb79599ad8b3c77922f6319a47eb7d436c27e07e2269e602a"' :
                                        'id="xs-injectables-links-module-WatchListDBModule-7f362b017c0204864f93921469f7597a79ddc55ec75e798d0c08db27759438b19898c2ee37f457ccb79599ad8b3c77922f6319a47eb7d436c27e07e2269e602a"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WatchListDBService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WatchListDBService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MovieController.html" data-type="entity-link" >MovieController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/VoteController.html" data-type="entity-link" >VoteController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnnounceJob.html" data-type="entity-link" >AnnounceJob</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DiscordService.html" data-type="entity-link" >DiscordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link" >EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GravatarService.html" data-type="entity-link" >GravatarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HistoryDBService.html" data-type="entity-link" >HistoryDBService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HistoryJob.html" data-type="entity-link" >HistoryJob</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MovieDBService.html" data-type="entity-link" >MovieDBService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MovieService.html" data-type="entity-link" >MovieService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PasswordService.html" data-type="entity-link" >PasswordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserDBService.html" data-type="entity-link" >UserDBService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VoteDBService.html" data-type="entity-link" >VoteDBService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VoteService.html" data-type="entity-link" >VoteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WatchListDBService.html" data-type="entity-link" >WatchListDBService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WatchListJob.html" data-type="entity-link" >WatchListJob</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EmailOptInDto.html" data-type="entity-link" >EmailOptInDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JwtUser.html" data-type="entity-link" >JwtUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MovieExtType.html" data-type="entity-link" >MovieExtType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PasswordDto.html" data-type="entity-link" >PasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PasswordNewDto.html" data-type="entity-link" >PasswordNewDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileDto.html" data-type="entity-link" >ProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResDto.html" data-type="entity-link" >ResDto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WatchlistExtType.html" data-type="entity-link" >WatchlistExtType</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
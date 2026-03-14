<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="footer__container">
                <div class="footer__brand">
                    <IconsLogo class="footer__logo"/>
                    <p class="footer__tagline">French Haute Cosmétique since 1920</p>
                </div>
                
                <div class="footer__info">
                    
                    
                    <div class="footer__social">
                        <a href="#" aria-label="Instagram" class="footer__social-link">
                            <IconsInst/>
                        </a>
                        <a href="#" aria-label="Facebook" class="footer__social-link">
                            <IconsFb/>
                        </a>
                    </div>

                    <div class="footer__contact">
                        <a href="tel:+33123456789" class="footer__contact-link">+33 1 23 45 67 89</a>
                        <a href="mailto:contact@payot.com" class="footer__contact-link">contact@payot.com</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer__bottom">
            <div class="footer__container">
                <p class="footer__copyright">&copy; 2026 Payot. All rights reserved.</p>
                <div class="footer__links">
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    .footer {
        background: linear-gradient(180deg, #FAF8FB 0%, $white-color 100%);
        
        &__top {
            padding-block: 80px 60px;
        }

        &__container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;

            @include container;
            @include tablet {
                flex-direction: row;
            }
        }

        &__brand {
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 8px;

            @include tablet {
                align-items: start;
                margin-bottom: 0;
            }
        }

        &__tagline {
            font-size: 15px;
            color: $gray-2-color;
            letter-spacing: 0.5px;
        }

        &__contact {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;

            @include tablet {
                align-items: end;
                gap: 12px;
            }
            &-link {
                font-size: 16px;
                color: $black-color;
                transition: color 0.3s ease;

                &:hover {
                    color: $pink-color;
                }
            }
        }

        &__social {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 16px;

            @include tablet {
                justify-content: end;
                margin-bottom: 24px;
            }

            &-link {
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #E8E8E8;
                border-radius: 50%;
                transition: all 0.3s ease;
                background-color: $white-color;

                svg {
                    width: 18px;
                    height: 18px;
                    transition: stroke 0.3s ease;
                }

                &:hover {
                    border-color: $pink-color;
                    background-color: $pink-color;
                    
                    svg {
                        stroke: $white-color;
                    }
                }
            }
        }

        &__bottom {
            background-color: $white-color;
            padding-block: 28px;
            border-top: 1px solid #E8E8E8;

            .footer__container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 16px;

                @include tablet {
                    flex-direction: row;
                    justify-content: space-between;
                }
            }
        }

        &__copyright {
            font-size: 13px;
            color: $gray-2-color;
        }

        &__links {
            display: flex;
            gap: 16px;

            @include tablet {
                gap: 24px;
            }
            a {
                font-size: 13px;
                color: $gray-2-color;
                transition: color 0.3s ease;

                &:hover {
                    color: $pink-color;
                }
            }
        }
    }
</style>
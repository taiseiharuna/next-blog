import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/templates/Layout';

const HomePage: NextPage = () => {
    return (
        <Layout>
            <main className="flex flex-col items-center">
                <div className="kv flex items-center bg-gray-100 mb-20 relative h-screen -mt-11 w-full">
                    <Image src="/images/Rectangle.png" alt="背景画像" layout='fill' objectFit="cover" />
                    <div className="box absolute inset-0 flex justify-center items-center mx-auto w-full px-4 sm:px-10 lg:px-20">
                        <div className="text-center">
                            <p className="box-text1 font-bold text-2xl sm:text-4xl lg:text-5xl text-indigo-700">
                                こんにちは、<br />
                                <span className="highlight text-2xl sm:text-4xl lg:text-5xl text-purple-500 font-bold">HARUCODE.</span>のハルです。
                            </p>
                            <p className="box-text2 text-base sm:text-lg lg:text-xl text-gray-600 pt-5">
                                関西を拠点にWEBデザインやHTML CSSコーディング<br />
                                に関するノウハウをブログで発信しています。
                            </p>
                            <div className="kv-button flex flex-col sm:flex-row justify-center mt-8 w-full sm:w-1/2">
                                <Link href="/youtube" className="inline-block mb-4 sm:mb-0 sm:mr-5 text-white font-bold text-sm">
                                    <Image src="/images/youtube_button.png" alt="YouTubeボタン" width={300} height={200} />
                                </Link>
                                <Link href="/contact" className="inline-block text-white font-bold text-sm">
                                    <Image src="/images/contact_button.png" alt="コンタクトボタン" width={200} height={100} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="text-center mx-5 justify-center mb-20 w-full max-w-screen-lg">
                    <div className="service flex flex-col lg:flex-row bg-white p-10 items-center">
                        <Image src="/images/service-img.png" alt="サービスイメージ" width={500} height={300} className="w-full lg:max-w-1/2 lg:mr-20 mb-5 lg:mb-0"/>
                        <div className="service_introduction flex-1 text-center lg:text-left">
                            <h2 className="font-sans text-xl lg:text-2xl font-medium text-black mb-5">サービス紹介</h2>
                            <p className="font-sans text-base lg:text-xl text-gray-600 mb-7 leading-8">
                                <span className="service_highlight text-3xl lg:text-5xl text-black font-bold">HARUCODE.とは？</span><br />
                                ハルコードは、WEBデザインを学ぶためのオンラインプラットフォームです。専門家の講師を元に、実践的な専門知識を授けています。
                            </p>
                            <div className="category flex flex-wrap justify-center lg:justify-start">
                                <p className="inline-block bg-gray-200 text-black font-bold text-base lg:text-xl px-2 py-1 mr-1 mb-1 rounded">#webデザイン</p>
                                <p className="inline-block bg-gray-200 text-black font-bold text-base lg:text-xl px-2 py-1 mr-1 mb-1 rounded">#html</p>
                                <p className="inline-block bg-gray-200 text-black font-bold text-base lg:text-xl px-2 py-1 mr-1 mb-1 rounded">#css</p>
                                <p className="inline-block bg-gray-200 text-black font-bold text-base lg:text-xl px-2 py-1 mr-1 mb-1 rounded">#javascript</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="study bg-gray-200 py-10 w-full max-w-screen-lg">
                    <div className="text-center">
                        <h2 className="text-2xl lg:text-3xl text-black mb-5">学習カテゴリー</h2>
                        <div className="study_category flex flex-col lg:flex-row justify-center gap-10 mx-5 lg:mx-20">
                            <div className="coding bg-indigo-800 text-white p-10 rounded mb-5 lg:mb-0">
                                <p className="study_highlight text-lg lg:text-xl font-bold">HTML CSS</p>
                                <Image src="/images/icon_code.png" alt="コーディングアイコン" width={50} height={50} className="mx-auto py-5" />
                                <p>ハルコードは、WEBデザインを学ぶためのオンラインプラットフォームです。</p>
                                <Image src="/images/study-coding.png" alt="コーディング画像" width={300} height={200} className="mx-auto mt-5" />
                            </div>
                            <div className="design bg-purple-700 text-white p-10 rounded mb-5 lg:mb-0">
                                <p className="study_highlight text-lg lg:text-xl font-bold">WEBデザイン</p>
                                <Image src="/images/icon_pen.png" alt="デザインアイコン" width={50} height={50} className="mx-auto py-5" />
                                <p>ハルコードは、WEBデザインを学ぶためのオンラインプラットフォームです。</p>
                                <Image src="/images/study-design.png" alt="デザイン画像" width={300} height={200} className="mx-auto mt-5" />
                            </div>
                            <div className="business bg-gray-300 text-black p-10 rounded">
                                <p className="study_highlight text-lg lg:text-xl font-bold">ビジネススキル</p>
                                <Image src="/images/icon_briefcase.png" alt="ビジネスアイコン" width={50} height={50} className="mx-auto py-5" />
                                <p>ハルコードは、WEBデザインを学ぶためのオンラインプラットフォームです。</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="youtube_bg bg-gray-100 py-10 w-full max-w-screen-lg">
                    <div className="youtube mx-5 lg:mx-40">
                        <div className="youtube_category w-full lg:w-3/4 mx-auto">
                            <h2 className="text-2xl lg:text-3xl text-black mb-5">YouTube</h2>
                            <p className="text-base lg:text-xl text-gray-600 leading-8 mb-7">
                                <span className="youtube_highlight text-3xl lg:text-5xl text-black font-bold">オススメ動画コンテンツ</span><br />
                                ハルコードは、WEBデザインを学ぶためのオンラインプラットフォームです。専門家の講師を元に、実践的な専門知識を授けています。
                            </p>
                            <Link href="/youtube" className="inline-block">
                                <Image src="/images/youtube_button.png" alt="YouTubeボタン" width={300} height={200} />
                            </Link>
                            <div className="youtube_thumbnail flex flex-col lg:flex-row justify-around mt-10">
                                <div className="thumbnail_list">
                                    <div className="thumbnail_item mb-5">
                                        <Image src="/images/next.png" alt="サムネイル画像" width={300} height={200} />
                                        <p className="text-sm text-gray-700">動画タイトル</p>
                                    </div>
                                    <div className="thumbnail_item mb-5">
                                        <Image src="/images/code_typing.png" alt="サムネイル画像" width={300} height={200} />
                                        <p className="text-sm text-gray-700">動画タイトル</p>
                                    </div>
                                </div>
                                <div className="thumbnail_list">
                                    <div className="thumbnail_item mb-5">
                                        <Image src="/images/pair_programming.png" alt="サムネイル画像" width={300} height={200} />
                                        <p className="text-sm text-gray-700">動画タイトル</p>
                                    </div>
                                    <div className="thumbnail_item mb-5">
                                        <Image src="/images/referral.png" alt="サムネイル画像" width={300} height={200} />
                                        <p className="text-sm text-gray-700">動画タイトル</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="works bg-white py-10 text-center border w-full max-w-screen-lg">
                    <h2 className="text-2xl lg:text-3xl font-sans text-gray-800 mb-5">Works</h2>
                    <p className="text-sm lg:text-base font-sans text-gray-700 mb-2.5 leading-7">
                        本格的なサイト制作も行っております。デザインからコーディングまでご対応が可能です。
                    </p>
                    <div className="price flex flex-col items-center mt-5">
                        <div className="price_list flex flex-col sm:flex-row flex-wrap justify-around w-full mt-5">
                            {[
                                { src: '/images/designer.png', title: 'ロゴ・バナーデザイン作成', price: '49,800円~' },
                                { src: '/images/designer_life.png', title: '静的サイト作成', price: '149,800円~' },
                                { src: '/images/code_review.png', title: 'WordPressサイト作成', price: '198,800円~' },
                                { src: '/images/web_shopping.png', title: 'ECサイト作成', price: '298,800円~' },
                                { src: '/images/mobile_web.png', title: 'WEBアプリ作成', price: '498,800円~' },
                                { src: '/images/portfolio_update.png', title: 'サイト管理代行', price: '99,800円~' }
                            ].map((item, index) => (
                                <div key={index} className="price_item max-w-sm p-2.5 rounded border m-2.5">
                                    <Image src={item.src} alt={item.title} width={150} height={150} />
                                    <p className="font-sans text-sm lg:text-base text-gray-700 mb-2.5">{item.title}</p>
                                    <div className="yen text-2xl lg:text-3xl font-bold">
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-5 text-sm lg:text-base">上記以外のご依頼でもまずは一度お気軽にご相談ください！</p>
                        <Link href="/contact" className="inline-block mt-5">
                            <Image src="/images/contact_button.png" alt="コンタクトボタン" width={200} height={100} />
                        </Link>
                    </div>
                </section>
                <section className="w-full max-w-screen-lg">
                    <div className="administrator border p-5">
                        <div className="box2 flex flex-col lg:flex-row justify-around items-start mt-5">
                            <div className="box2_profile w-full lg:w-1/2 mb-5 lg:mb-0">
                                <div className="profile justify-center mt-5">
                                    <div>
                                        <Image src="/images/drink_coffee.png" alt="カフェでコーヒーを飲む人" width={150} height={150} />
                                    </div>
                                    <div className="flex flex-col lg:flex-row justify-center mt-5">
                                        <div className="flex justify-center lg:justify-start mb-2.5 lg:mb-0 lg:mr-5">
                                            <p className="mr-2.5">活動拠点</p>
                                            <p className="administrator_highlight text-3xl lg:text-5xl text-black font-bold">OSAKA</p>
                                        </div>
                                        <div className="flex justify-center lg:justify-start">
                                            <p className="mr-2.5">受注実績</p>
                                            <p className="administrator_highlight text-3xl lg:text-5xl text-black font-bold">100over</p>
                                        </div>
                                    </div>
                                    <div className="box2_sns flex justify-center mt-2.5">
                                        <ul className="profile_sns flex">
                                            <li className="mr-2.5">
                                                <Link href="/youtube">
                                                    <Image src="/images/icon_youtube.png" alt="YouTubeアイコン" width={50} height={50} />
                                                </Link>
                                            </li>
                                            <li className="mr-2.5">
                                                <Link href="/twitter">
                                                    <Image src="/images/icon_twitter.png" alt="Twitterアイコン" width={50} height={50} />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/instagram">
                                                    <Image src="/images/icon_instagram.png" alt="Instagramアイコン" width={40} height={40} />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="box2_administrator w-full lg:w-1/2">
                                <h2 className="text-lg lg:text-xl font-sans text-gray-800 mt-5">運営者</h2>
                                <p className="administrator_highlight text-3xl lg:text-5xl text-black font-bold">HARU. ハル</p>
                                <p className="text-sm lg:text-base font-sans text-gray-700 mb-2.5 leading-7">
                                    こんにちは、HARUコードを運営しているHARUです。皆さんの学習がもっと充実するように、より良いコンテンツを発信していけたらと思います。ご要望などありましたら、お気軽にお問い合わせください。
                                </p>
                                <Link href="/contact" className="inline-block mt-5">
                                    <Image src="/images/contact_button.png" alt="コンタクトボタン" width={200} height={100} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default HomePage;
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Star, ChevronDown, Package, Truck, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function UmamisoLP() {
  const [currentReviews, setCurrentReviews] = useState<any[]>([])

  const reviews = [
    {
      title: "おいしい！",
      comment: "推しが紹介していたので購入。ごはんにのせるだけで食べれる手軽さがいいです。アレンジも少しやってみたけど、そのままがおいしい。開封しない限りは常温保存できるので、2個セットも全然問題なく消費できそうです。またなくなったら頼みたいです",
      rating: 4,
      name: "お客様１",
    },
    {
      title: "これはうまい",
      comment: "これはかなり美味しいです。肉肉でかなりの旨味があります。また買いたい。",
      rating: 5,
      name: "お客様２",
    },
    {
      title: "冷蔵庫に常備したいです",
      comment: "ラジオで聞いてから、ハマっています ごはんのお供はもちろんのこと、スティック野菜につけたり、厚揚げを焼いたものにつけたり エゴマや大葉の香りがして本当においしいです",
      rating: 5,
      name: "お客様３",
    },
    {
      title: "何でも合う",
      comment: "肉っぽいくさみやえぐみ全くなく、肉味噌の味の濃さに加えて大葉やえごまの爽やかな風味がとても美味しいです 白米だけでなく、麺類の具としても良さそうです",
      rating: 5,
      name: "お客様４",
    },
    {
      title: "ご飯がすすむ！",
      comment: "食欲がなかった主人におにぎりの具にして出したところ、美味い美味いとペロリと平らげました！パスタの隠し味にしてもgoodでした リピします",
      rating: 5,
      name: "お客様５",
    },
    {
      title: "在庫切れが長く続き、やっと手に入れました。",
      comment: "大葉の香りもよく、温かいご飯にのせても良し、おにぎりの具にも良し、大変美味しいです。一瓶がすぐ無くなりました。",
      rating: 5,
      name: "お客様６",
    },
    {
      title: "美味い！",
      comment: "私もラジオ番組を聴いてしりました。ラジオパーソナリティの方が絶賛していたので試してみたくなり即購入しました。食べてみたら最高に美味しかったです！",
      rating: 5,
      name: "お客様７",
    },
    {
      title: "食べやすい！",
      comment: "ラジオでこの商品を知り購入しました！購入してから直ぐに発送していただいたので2日後には手元へ。お米にのせて食べたらめちゃくちゃ美味しかった！馬肉感少し控えめかもしれないけどえごまやの食感や大葉の爽やかさがとてもよかったです！",
      rating: 4,
      name: "お客様８",
    },
  ]

  useEffect(() => {
    setCurrentReviews(reviews)
  }, [])

  const products = [
    {
      id: "2set",
      title: "馬肉物語 食べるウマミソ 2個セット",
      description: "先ずはお試しに",
      price: "1,680円（送料無料）",
      image: "/images/aizubrandhall-4571318633588-i-20231023134652.jpeg",
      badge: null,
    },
    {
      id: "umara-set",
      title: "ウマラー＆ウマミソセット",
      description: "人気No.1",
      price: "1,680円（送料無料）",
      image: "/images/aizubrandhall-4571318634455-i-20240514124653.jpeg",
      badge: "人気No.1",
    },
  ]

  const ingredients = [
    {
      title: "馬肉の秘密",
      description: "牛肉や豚肉よりも高タンパク、なのに低カロリー。鉄分やビタミンB12も豊富な馬肉は、現代人の健康維持に最適です。",
      image: "/images/hf-20260129-052152-fed6388f-9a21-43e6-b403.jpeg",
    },
    {
      title: "米味噌のコク",
      description: "会津の気候が育んだ深い味わい。",
      image: "/images/miso-illustration.jpg",
    },
    {
      title: "大葉の清涼感",
      description: "肉味噌の概念を覆す、後味の爽やかさ。",
      image: "/images/shiso-leaf.png",
    },
    {
      title: "えごまの食感",
      description: "噛むたびに弾ける楽しさと、オメガ3脂肪酸の恵み。",
      image: "/images/egoma-plant.jpg",
    },
  ]

  const faqs = [
    {
      question: "保存方法はどうしたらいいですか？",
      answer: "未開封時は常温保存が可能です。開封後は冷蔵庫で保管し、お早めにお召し上がりください。賞味期限は製造日から1年（発送時は6ヶ月以上のものを保証）。高温多湿を避け、直射日光の当たらない場所で保存をおすすめします。",
    },
    {
      question: "アレルギー成分は含まれていますか？",
      answer: "はい、原材料に小麦・大豆が含まれています（しょうゆ由来）。また、一部にえごまや唐辛子を使用しています。アレルギー体質の方は成分表をよくご確認ください。馬肉自体はアレルゲンではありませんが、気になる場合は医師にご相談を。",
    },
    {
      question: "馬肉の臭いが気になりますか？",
      answer: "馬肉特有の臭みは一切なく、大葉の爽やかな香りとえごまのプチプチ食感がアクセントになっています。レビューでも「臭みゼロで食べやすい」と好評です！明治時代からの会津伝統を現代風にアレンジした味わいをお楽しみください。",
    },
    {
      question: "おすすめの食べ方は何ですか？",
      answer: "温かいご飯にのせてお召し上がりください！おにぎりの具材としても抜群です。また、豆腐や野菜のトッピング、チャーハンや卵焼きの具にアレンジ可能。高たんぱく低カロリーなので、ヘルシーな一品にぴったり。",
    },
    {
      question: "内容量や価格は？",
      answer: "内容量は120g × 2個セットで、価格は1,780円（税込）。馬肉、ごろごろ具材たっぷりで食べ応え抜群。",
    },
  ]

  return (
    <>
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="container mx-auto px-4 py-2 flex items-center justify-center">
          <Link href="/">
            <Image
              src="/images/aizu-brand-hall-logo.jpg"
              alt="会津ブランド館"
              width={120}
              height={120}
              className="h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative">
        <div className="relative h-[60vh] md:h-[70vh] bg-stone-100">
          <Image
            src="/images/hero-umamiso.jpg"
            alt="食べるウマミソ - ご飯にのせたウマ味噌"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-stone-800 leading-tight">
              ごはんにも、料理にも。
              <br />
              これひとつで<span className="text-amber-700">"会津のうまみ"</span>。
              <br />
              <span className="text-amber-700">至福の『ウマ味噌』体験。</span>
            </h1>
            <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              TBSラジオで絶賛！楽天・Yahoo!ショッピングで高評価続出。
              <br className="hidden md:block" />
              高タンパク・低カロリーな希少馬肉を、伝統の味噌と大葉・えごまで仕上げた極上の一品。
            </p>
          </div>
        </div>
      </section>

      {/* ターゲットに対して購買意欲を高めるセクション */}
      <section className="py-16 bg-amber-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-stone-800">
              いつものごはんに、ひとさじ。
              <br />
              それだけで、味が決まる。
            </h2>
            <div className="text-base md:text-lg leading-relaxed text-stone-700 space-y-4">
              <p>
                会津ブランド館の食べるうまみそは、のせる・和える・仕上げに使える<strong className="text-amber-700">"食べる調味料"</strong>。
              </p>
              <p>
                白ごはんはもちろん、野菜やお肉、冷奴にもよく合います。
              </p>
              <p>
                会津の素材を生かした、コクがあるのに食べやすい味わい。
              </p>
              <p>
                世代を問わず、毎日の食卓で活躍します。
              </p>
              <p className="text-lg md:text-xl font-semibold text-amber-800 pt-4">
                冷蔵庫にあると頼れる一品を、ぜひお試しください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ランキングセクション */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-3xl mx-auto">
            <Image
              src="/images/10000085.jpg"
              alt="楽天市場ランキング堂々1位獲得"
              width={320}
              height={213}
              className="w-full md:w-1/2 max-w-[320px] h-auto rounded-lg shadow-md"
            />
            <Image
              src="/images/yahoo-ranking.jpg"
              alt="Yahoo!ショッピングカテゴリランキング1位獲得"
              width={320}
              height={213}
              className="w-full md:w-1/2 max-w-[320px] h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 成分と味の秘密セクション */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-stone-800">
            美味しさの秘密
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {ingredients.map((item, index) => (
              <Card key={index} className="overflow-hidden bg-white border-0 shadow-md">
                <div className="relative aspect-square w-full bg-stone-100">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base md:text-lg font-bold text-amber-800">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-stone-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 食の安全性証明セクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-stone-800">
              日本が誇る馬刺しの名産地、会津
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
              <div className="space-y-6">
                <p className="text-base md:text-lg text-stone-700 leading-relaxed">
                  豊かな自然に恵まれた福島県会津地方。会津の馬刺しは、400年以上の歴史を持ち、武士たちに愛されてきました。そして現在は、全国の食通を唸らせる逸品となっています。
                </p>
                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                  <Shield className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-stone-800 mb-1">安心・安全</h4>
                    <p className="text-sm text-stone-600">
                      徹底した品質管理と最新の衛生基準に基づいた製造プロセスにより、安心して召し上がっていただけます。
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/basashi-plate.jpg"
                  alt="会津の馬刺し盛り合わせ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* 会津畜産セクション */}
            <div className="bg-stone-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-6">
                会津畜産 – 馬刺しの品質を支える匠の技
              </h3>
              <p className="text-stone-700 mb-6 leading-relaxed">
                会津の馬刺しを支えるのが、会津畜産。全国（主に北海道）の生産者から素馬を仕入れ、自社の牧場で3ヶ月から2年かけて丁寧に肥育。独自の配合飼料（遊離アミノ酸含有量を増やし旨味を引き出す）を与え、約400頭の馬を健康的に育てています。
              </p>
              
              {/* 厩舎とX線検査の写真 */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/aizu-chikusan-stable.jpg"
                    alt="会津畜産の厩舎内部"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/xray-inspection.jpg"
                    alt="X線検査による品質管理"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-800 text-sm mb-1">肉質へのこだわり</h4>
                    <p className="text-xs text-stone-600">自社で格付けを行い、新鮮な赤身の旨味を追求</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-800 text-sm mb-1">徹底した安全管理</h4>
                    <p className="text-xs text-stone-600">細菌検査室を設け、毎日無作為に自主検査を実施</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-800 text-sm mb-1">専門機関のチェック</h4>
                    <p className="text-xs text-stone-600">江東微生物研究所による定期検査で安心・安全を確保</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 商品カードセクション */}
      <section id="products" className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-stone-800">商品ラインナップ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white border-0">
                <div className="relative aspect-[3/4] w-full bg-stone-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-contain p-6"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {product.badge}
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base md:text-lg leading-tight text-stone-800">{product.title}</CardTitle>
                  <CardDescription className="text-sm text-amber-700 font-medium">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-amber-700">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声セクション */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-stone-800">お客様の声</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {currentReviews.map((review, i) => (
              <Card key={i} className="bg-amber-50/50 border-0 shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
                      <Image
                        src="/images/customer-male.jpg"
                        alt={`${review.name}のアバター`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="font-medium text-stone-800">{review.name}</span>
                    </div>
                  </div>
                  <CardTitle className="text-base font-bold text-stone-800">{review.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        className={`w-4 h-4 ${index < review.rating ? 'text-amber-400 fill-current' : 'text-stone-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* よくあるご質問セクション */}
      <section id="faq" className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-stone-800">よくあるご質問</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg border-0 shadow-sm px-6"
                >
                  <AccordionTrigger className="text-left text-stone-800 font-medium hover:text-amber-700 hover:no-underline py-4">
                    Q{index + 1}. {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-stone-600 leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 送料無料・即日発送セクション */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
            <Image
              src="/images/souryou-muryou.jpg"
              alt="送料無料（沖縄・離島地域除く）"
              width={400}
              height={160}
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md"
            />
            <Image
              src="/images/sokujitsu-hassou.jpg"
              alt="14時までのご注文で即日発送"
              width={400}
              height={160}
              className="w-full md:w-1/2 h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ご購入はこちらセクション */}
      <section id="purchase" className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-stone-800">ご購入はこちらから</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Yahoo!ショッピング */}
            <div className="bg-[#ffecec] p-6 rounded-xl">
              <Link
                href="https://store.shopping.yahoo.co.jp/aizubrandhall/4571318633588.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white p-4 mx-auto max-w-[180px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-stone-100 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src="/images/buyyahoo.png"
                    alt="Yahoo!ショッピング"
                    width={180}
                    height={180}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mb-2 text-center text-stone-800">Yahoo!ショッピング</h4>
              <p className="text-sm text-center text-stone-600">PayPayポイントが貯まる使えるショッピングモールはこちら</p>
            </div>

            {/* 楽天市場 */}
            <div className="bg-[#e8f4ff] p-6 rounded-xl">
              <Link
                href="https://item.rakuten.co.jp/aizubrandhall/10000085/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white p-4 mx-auto max-w-[180px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-stone-100 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src="/images/buyrakuten.png"
                    alt="楽天市場"
                    width={180}
                    height={180}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mb-2 text-center text-stone-800">楽天市場</h4>
              <p className="text-sm text-center text-stone-600">楽天ポイントが使える国内最大級のショッピングモールはこちら</p>
            </div>

            {/* Amazon */}
            <div className="bg-[#ecfce8] p-6 rounded-xl">
              <Link
                href="https://www.amazon.co.jp/dp/B0BV11XDVV"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-white p-4 mx-auto max-w-[180px] aspect-square flex flex-col items-center justify-center rounded-lg border-2 border-stone-100 hover:shadow-lg transition-shadow mb-4">
                  <Image
                    src="/images/buyamazon.png"
                    alt="Amazon"
                    width={180}
                    height={180}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
              <h4 className="font-bold mb-2 text-center text-stone-800">Amazon</h4>
              <p className="text-sm text-center text-stone-600">世界最大のショッピングモールでのお買い物はこちら</p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-stone-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 mb-8 max-w-4xl mx-auto">
            <div className="flex-1">
              <h4 className="font-bold text-lg mb-4">店舗案内</h4>
              <p className="text-xl font-bold mb-3">会津ブランド館</p>
              <div className="text-stone-300 text-sm leading-relaxed space-y-1">
                <p>{'\u3012'}965-0044</p>
                <p>福島県会津若松市七日町6-15</p>
                <p>TEL: 0242-25-1441</p>
                <p>営業時間: 11時〜16時</p>
                <p>定休日: 12月31日・1月1日</p>
                <p className="text-stone-400 text-xs mt-1">{'（年末年始はお休みさせて頂きます）'}</p>
                <Link
                  href="https://maps.app.goo.gl/ybQgdocFWiihYVwi7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-amber-400 hover:text-amber-300 text-sm underline transition-colors"
                >
                  Google Maps で見る
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/aizu-brand-hall-exterior.jpg"
                  alt="会津ブランド館 外観"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-stone-700 pt-8 text-center text-stone-400 text-sm">
            <p>&copy; 2025 AIZU BRAND HALL. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

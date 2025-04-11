"use client";
import React, { useState } from "react";
import { Button } from "@/app/components/button";
import { Input } from "@/app/components/input";
import { Label } from "@/app/components/label";
import { Checkbox } from "@/app/components/checkbox";
import { RadioGroup, RadioGroupItem } from "@/app/components/radio-group";
import Link from "next/link";

export default function HairTextureForm() {
  const [form, setForm] = useState({
    nickname: "",
    age: "",
    gender: "",
    bloodtype: "",
    occupation: "",
    familyhage: "",
    eatinghabits: "",
    sleep: "",
    stress: "",
    undo: "",
    drink: "",
    smoke: "",
    usugemotivation: "",
    usugeexperience: "",
    futureaga: "",
    sindan: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleCheckboxChange = (field, value) => {
    setForm((prev) => {
      const updated = prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value];
      return { ...prev, [field]: updated };
    });
  };
  
  const isFormValid =
    form.nickname &&
    form.age &&
    form.gender &&
    form.bloodtype &&
    form.occupation &&
    form.familyhage &&
    form.eatinghabits &&
    form.sleep &&
    form.stress &&
    form.undo &&
    form.drink &&
    form.smoke &&
    form.usugemotivation &&
    form.usugeexperience &&
    form.futureaga &&
    form.sindan  ;

//最後は消すけどエラーハンドリングで書いている　ここから    
    const handleSubmit = async () => {
      try {
        console.log("フォーム送信処理が開始されました。");
        console.log("現在のフォームデータ:", form);
    
        // 必須データの確認
        const id = form.hairQuestionYouId;
        if (!id) {
          console.error("hairQuestionYouIdが指定されていません"); // エラーとしてログに出力
          alert("hairQualityIdが設定されていません。");
          return;
        }
    
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        console.log("APIのベースURL:", apiBaseUrl); // API URLを確認するためのログ
    
        const response = await fetch(`${apiBaseUrl}/hairQuality/${id}/hairQuality/hairQuestionYou`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...form,
            age: Number(form.age),
          }),
        });
    
        console.log("APIリクエスト送信成功:", response); // レスポンスオブジェクトをログに出力
    
        if (!response.ok) {
          console.error("サーバーエラー発生:", response.statusText); // HTTPステータスの確認
          throw new Error("送信に失敗しました");
        }
    
        const result = await response.json();
        console.log("サーバーからのレスポンス:", result); // レスポンスデータをログに出力
        alert("送信が完了しました！");
      } catch (err) {
        console.error("送信エラー:", err.message); // エラー詳細をログ出力
        alert(`送信に失敗しました: ${err.message}`);
      }
    }; 

    //最後は消すけどエラーハンドリングで書いている　ここから 
    
    // const handleSubmit = async () => {
    //   try {
    //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/hairQuality/hairQuestionYou`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         ...form,
    //         age: Number(form.age),
    //       }),
    //     });
  
    //     if (!response.ok) throw new Error("送信失敗");
  
    //     const result = await response.json();
    //     console.log("送信成功:", result);
    //     alert("送信が完了しました！");
    //   } catch (err) {
    //     console.error("送信エラー:", err);
    //     alert("送信に失敗しました");
    //   }
    // };
  
  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">AIかもかも診断</h1>
      <p className="text-gray-600">あなたのことも聞かせてください！</p>


 {/* ★★★お客さんに名前を入力させる★★★「nickname」*/} 
      <div className="space-y-4">
        <Label htmlFor="nickname" className="block mb-1">お客様のお名前</Label>
        <Input id="nickname" placeholder="お客様のお名前" value={form.nickname} onChange={(e) => handleChange("nickname", e.target.value)} />
      </div>

 {/* ★★★お客さんに年齢を「プルダウンで」選択させる★★★「age」*/} 
      <div className="space-y-4">
        <Label htmlFor="age" className="block mb-1">年齢</Label>
        <select id="age" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("age", e.target.value)} value={form.age}>
          <option value="">未選択</option>
          {[...Array(53)].map((_, i) => (
            <option key={i} value={i + 18}>{i + 18}歳</option>
          ))}
        </select>
      </div>
      

 {/* ★★★お客さんに性別を「プルダウンで」選択させる★★★「gender」*/} 
 <div className="space-y-4">
        <Label htmlFor="gender" className="block mb-1">性別</Label>
        <select id="gender" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("gender", e.target.value)} value={form.gender}>
          <option value="">未選択</option>
          {['男性','女性','その他'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div> 


 {/* ★★★お客さんに血液型をプルダウンで選択させる★★★「bloodtype」 */} 
 <div className="space-y-4">
        <Label htmlFor="bloodtype" className="block mb-1">血液型</Label>
        <select id="bloodtype" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("bloodtype", e.target.value)} value={form.bloodtype}>
          <option value="">未選択</option>
          {['A型','B型','O型','AB型','その他','わからない'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div> 


 {/* ★★★お客さんに職業を「プルダウンで」選択させる★★★「occupation」 */} 
      <div className="space-y-4">
        <Label htmlFor="occupation" className="block mb-1">ご職業</Label>
        <select id="occupation" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("occupation", e.target.value)} value={form.occupation}>
          <option value="">未選択</option>
          {['会社員','公務員','自営業','フリーランス','学生','主婦/主夫','パート・アルバイト','専門職（医師、弁護士、技術者など）','農業・漁業','教育関係者','アーティスト／クリエイター','無職'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>



 {/* ★★★お客さんに近親者に薄毛がいるかを「点でひとつ」選択させる★★★「familyhage」*/} 
      <div className="space-y-4">
        <Label htmlFor="familyhage" className="block mb-1">ご家族に薄毛の人はいますか？（二親等以内）</Label>
        <select id="familyhage" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("familyhage", e.target.value)} value={form.familyhage}>
          <option value="">未選択</option>
          {['複数人いる','一人いる','いない'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>


 {/* ★★★お客さんに食生活を「プルダウンで」選択させる★★★「eatinghabits」*/} 
      <div className="space-y-4">
        <Label htmlFor="eatinghabits" className="block mb-1">食生活</Label>
        <select id="eatinghabits" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("eatinghabits", e.target.value)} value={form.eatinghabits}>
          <option value="">未選択</option>
          {['健康的でバランスの取れた食事を心がけている','外食やテイクアウトが中心','食事の時間や内容が不規則','ファストフードや加工食品をよく食べる','食事をあまり気にしていない'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>


{/* ★★★お客さんに睡眠習慣を「プルダウン」で選択させる★★★「sleep」*/} 
      <div className="space-y-4">
        <Label htmlFor="sleep" className="block mb-1">睡眠習慣</Label>
        <select id="sleep" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("sleep", e.target.value)} value={form.sleep}>
          <option value="">未選択</option>
          {['毎晩規則的に寝ている（7〜8時間）','規則的だが、睡眠時間が短い（5〜6時間）','不規則だが十分な睡眠を取れている','不規則で睡眠不足（5時間未満）','昼夜逆転している','眠れないことが多い（睡眠障害）','よくわからない／意識していない'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>


{/* ★★★お客さんにストレスを「プルダウン」で選択させる★★★「stress」*/} 
<div className="space-y-4">
        <Label htmlFor="stress" className="block mb-1">日常的なストレス</Label>
        <select id="stress" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("stress", e.target.value)} value={form.stress}>
          <option value="">未選択</option>
          {['とてもある','少しある','あまりない','まったくない','わからない'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>


{/* ★★★お客さんに運動習慣を「プルダウン」で選択させる★★★「undo」*/} 
<div className="space-y-4">
        <Label htmlFor="undo" className="block mb-1">日常的な運動習慣</Label>
        <select id="undo" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("undo", e.target.value)} value={form.undo}>
          <option value="">未選択</option>
          {['週に4回以上','週に2～3回程度','週に1回以下','まったくない'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>




{/* ★★★お客さんに飲酒習慣を「プルダウン」で選択させる★★★「drink」*/} 
<div className="space-y-4">
        <Label htmlFor="drink" className="block mb-1">日常的な飲酒習慣</Label>
        <select id="drink" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("drink", e.target.value)} value={form.drink}>
          <option value="">未選択</option>
          {['週に4回以上','週に2～3回程度','週に1回以下','まったくない'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>


{/* ★★★お客さんに喫煙習慣を「プルダウン」で選択させる★★★「smoke」*/} 
<div className="space-y-4">
        <Label htmlFor="smoke" className="block mb-1">日常的な喫煙習慣</Label>
        <select id="smoke" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("smoke", e.target.value)} value={form.smoke}>
          <option value="">未選択</option>
          {['1日2箱以上','1日1箱','たまに吸う','まったく吸わない'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>


{/* ★★★お客さんに現在薄毛を気にしているかを「プルダウン」で選択させる★★★「usugemotivation」*/} 
<div className="space-y-4">
        <Label htmlFor="usugemotivation" className="block mb-1">現在薄毛を気にしているか</Label>
        <select id="usugemotivation" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("usugemotivation", e.target.value)} value={form.usugemotivation}>
          <option value="">未選択</option>
          {['すごく気にしている','少し気にしている','あまり気にしていない','まったく気にしていない'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>


{/* ★★★お客さんに薄毛対策として何か取り組んだことはあるかを「プルダウン」で選択させる★★★「usugeexperience」*/} 
<div className="space-y-4">
        <Label htmlFor="usugeexperience" className="block mb-1">薄毛対策のご経験</Label>
        <select id="usugeexperience" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("usugeexperience", e.target.value)} value={form.sick}>
          <option value="">未選択</option>
          {['取り組んだことがある','取り組んだことはない','覚えていない'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>



{/* ★★★お客さんに将来的にAGA治療を考えているかを「プルダウン」で選択させる★★★「futureaga」*/} 
<div className="space-y-4">
        <Label htmlFor="futureaga" className="block mb-1">将来的にAGA治療を考えているか</Label>
        <select id="futureaga" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("futureaga", e.target.value)} value={form.futureaga}>
          <option value="">未選択</option>
          {['真剣に考えている','少し考えている','あまり考えていない','まったく考えていない'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>


{/* ★★★お客さんに診断結果どのように伝えてほしいかを「プルダウン」で選択させる★★★「sindan」*/} 
<div className="space-y-4">
        <Label htmlFor="sindan" className="block mb-1">診断結果をどのように伝えてほしいですか？</Label>
        <select id="sindan" className="w-full border rounded px-3 py-2" onChange={(e) => handleChange("sindan", e.target.value)} value={form.sindan}>
          <option value="">未選択</option>
          {['はっきりと伝えてほしい','やわらかく伝えてほしい','どちらでもよい'].map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>


      <Button className="w-full" disabled={!isFormValid} onClick={handleSubmit}>
        次へ
      </Button>
    </div>
  );
}

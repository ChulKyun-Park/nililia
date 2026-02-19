# 🎨 NILILIA Design Guideline for AI Collaboration

이 문서는 닐리리아 프로젝트의 디자인 일관성을 유지하기 위한 절대 규칙입니다. 
AI는 모든 컴포넌트 생성 및 수정 시 아래 가이드를 반드시 준수해야 합니다.

---

## 1. 🎨 Color Palette (Strict 2-Color Rule)
* **Primary (Brand Color)**: `#0097FE` (Blue)
    * 사용처: 버튼, 포인트 아이콘, 텍스트 하이라이트, 활성 인디케이터.
* **Base (Background Color)**: `#FFFFFF` (White)
    * 사용처: 전체 배경, 카드 배경, 섹션 배경.
* **Substitutes (Optional)**: 
    * `Gray 900` (#111827) - 타이틀 텍스트
    * `Gray 500` (#6B7280) - 본문 텍스트 및 보조 요소
    * `#0097FE/5` (Opacity 5%) - 아주 연한 배경 강조가 필요할 때만 사용.

## 2. 🛠 Tech Stack & Components
* **Framework**: Next.js (App Router)
* **Styling**: Tailwind CSS
* **UI Library**: **shadcn/ui** (MUI 사용 절대 금지)
* **Icons**: **lucide-react**

## 3. 📏 Layout & Spacing
* **Section Padding**: `py-24` (섹션 간 충분한 수직 여백 유지)
* **Container**: `max-w-7xl mx-auto px-6`
* **Border Radius**: 
    * Cards: `rounded-[32px]` 또는 `rounded-[48px]`
    * Buttons/Tags: `rounded-xl` 또는 `rounded-full`

## 4. 🤖 AI Collaboration Rules (Vibe Coding)
* **No MCP Design**: MCP를 통한 직접적인 디자인 조작을 피하고, 정해진 Tailwind 클래스 내에서 작업할 것.
* **Skills Usage**: 디자인 가이드라인을 최우선 순위(Skill)로 인식하여 일관된 코드 생성.
* **English Prompting**: UI 묘사 및 레이아웃 구조 설명은 구체적인 영어 프롬프트를 활용할 것.

## 5. 🚀 Backend Integration (Future Python Setup)
* **API Standard**: RESTful API 또는 GraphQL 지향.
* **Data Flow**: Next.js (BFF) -> Python (AI/Core Logic).
* **UI States**: 모든 컴포넌트는 Loading, Error, Empty 상태를 `#0097FE` 테마에 맞춰 설계할 것.

---
**주의**: 기능을 먼저 만들고 디자인을 나중에 입히지 마십시오. 모든 컴포넌트는 초기 생성 시점부터 위 가이드를 적용합니다.
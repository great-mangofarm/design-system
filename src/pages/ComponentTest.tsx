import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icon"
import { Typography } from "@/components/ui/typography"
import { Input } from "@/components/ui/input"

export default function ComponentTest() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-6xl space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <Typography variant="h1" className="text-center">
            Design System
          </Typography>
          <Typography variant="lead" className="text-center">
            디자인 시스템의 모든 컴포넌트와 variant들을 한눈에 확인하세요
          </Typography>
        </div>

        {/* Colors Section - 맨 위로 이동 */}
        <section className="space-y-8">
          <div className="space-y-2">
            <Typography variant="h2" className="text-center">Colors</Typography>
            <Typography variant="p" className="text-muted-foreground text-center mt-2">
              디자인 시스템의 색상 팔레트
            </Typography>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Base Colors */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Base</Typography>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-foreground"></div>
                  <Typography variant="small">foreground</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-background border"></div>
                  <Typography variant="small">background</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-card border"></div>
                  <Typography variant="small">card</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-popover border"></div>
                  <Typography variant="small">popover</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-input border"></div>
                  <Typography variant="small">input</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-border"></div>
                  <Typography variant="small">border</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-ring"></div>
                  <Typography variant="small">ring</Typography>
                </div>
              </div>
            </div>

            {/* Primary Colors */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Primary</Typography>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-primary"></div>
                  <Typography variant="small">primary</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-primary-background"></div>
                  <Typography variant="small">primary-background</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-primary-foreground"></div>
                  <Typography variant="small">primary-foreground</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-primary-dark"></div>
                  <Typography variant="small">primary-dark</Typography>
                </div>
              </div>
            </div>

            {/* Warning Colors */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Warning</Typography>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-warning"></div>
                  <Typography variant="small">warning</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-warning-background"></div>
                  <Typography variant="small">warning-background</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-warning-foreground"></div>
                  <Typography variant="small">warning-foreground</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-warning-dark"></div>
                  <Typography variant="small">warning-dark</Typography>
                </div>
              </div>
            </div>

            {/* Error Colors */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Error</Typography>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-error"></div>
                  <Typography variant="small">error</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-error-background"></div>
                  <Typography variant="small">error-background</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-error-foreground"></div>
                  <Typography variant="small">error-foreground</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-error-dark"></div>
                  <Typography variant="small">error-dark</Typography>
                </div>
              </div>
            </div>

            {/* Muted Colors */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Muted</Typography>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-muted"></div>
                  <Typography variant="small">muted</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-muted-background"></div>
                  <Typography variant="small">muted-background</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-muted-foreground"></div>
                  <Typography variant="small">muted-foreground</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-muted-light"></div>
                  <Typography variant="small">muted-light</Typography>
                </div>
              </div>
            </div>

            {/* Disabled Colors */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Disabled</Typography>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-disabled"></div>
                  <Typography variant="small">disabled</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-disabled-background"></div>
                  <Typography variant="small">disabled-background</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded bg-disabled-foreground"></div>
                  <Typography variant="small">disabled-foreground</Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section className="space-y-8">
          <div className="space-y-2">
            <Typography variant="h2" className="text-center">Typography</Typography>
            <Typography variant="p" className="text-muted-foreground text-center mt-2">
              다양한 텍스트 스타일과 크기를 제공합니다
            </Typography>
          </div>
          
          <div className="grid gap-6 md:grid-cols-1">
            {/* Headings */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Headings</Typography>
              <div className="space-y-3">
                <Typography variant="h1">H1: 디자인 시스템의 가장 큰 제목입니다</Typography>
                <Typography variant="h2">H2: 섹션을 나누는 중간 제목입니다</Typography>
                <Typography variant="h3">H3: 작은 섹션의 제목입니다</Typography>
                <Typography variant="h4">H4: 세부 내용의 제목입니다</Typography>
              </div>
            </div>

            {/* Body Text */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Body Text</Typography>
              <div className="space-y-3">
                <Typography variant="lead">Lead: 중요한 내용을 강조하는 텍스트입니다</Typography>
                <Typography variant="p">P: 일반적인 본문 텍스트입니다</Typography>
                <Typography variant="large">Large: 큰 크기의 본문 텍스트입니다</Typography>
                <Typography variant="small">Small: 작은 크기의 보조 텍스트입니다</Typography>
                <Typography variant="caption">Caption: 이미지나 표의 설명 텍스트입니다</Typography>
                <Typography variant="mono" className="block">Mono: 0123456789 ABCDEF</Typography>
              </div>
            </div>
          </div>

          {/* Lists */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Unordered List</Typography>
              <Typography variant="ul">
                <li>UL: 첫 번째 항목입니다</li>
                <li>UL: 두 번째 항목입니다</li>
                <li>UL: 세 번째 항목입니다</li>
              </Typography>
            </div>

            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Ordered List</Typography>
              <Typography variant="ol">
                <li>OL: 첫 번째 단계입니다</li>
                <li>OL: 두 번째 단계입니다</li>
                <li>OL: 세 번째 단계입니다</li>
              </Typography>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="space-y-8">
          <div className="space-y-2">
            <Typography variant="h2" className="text-center">Buttons</Typography>
            <Typography variant="p" className="text-muted-foreground text-center mt-2">
              다양한 버튼 스타일과 크기를 제공합니다
            </Typography>
          </div>

          {/* Button Variants */}
          <div className="space-y-6">
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Button Variants</Typography>
              <div className="flex flex-wrap gap-4">
                <Button>Default Button</Button>
                <Button variant="secondary">Default Button</Button>
                <Button>
                  <Icons.heart />
                  Icon + Text
                </Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="link">Link Button</Button>
              </div>
            </div>

            {/* Button Sizes */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Button Sizes</Typography>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            {/* Button States */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Button States</Typography>
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button variant="ghost" disabled>Ghost Disabled</Button>
                <Button className="bg-primary-dark">Hover State (Preview)</Button>
              </div>
            </div>
          </div>

          {/* Icon Buttons */}
          <div className="space-y-4 rounded-lg border p-6">
            <Typography variant="h3" className="text-primary">Icon Only Buttons</Typography>
            <div className="flex flex-wrap gap-4">
              <Button variant="solid-icon" size="icon">
                <Icons.heart />
              </Button>
              <Button variant="ghost-icon" size="icon">
                <Icons.star />
              </Button>
              <Button variant="default" size="icon">
                <Icons.plus />
              </Button>
              <Button variant="solid-icon" size="sm">
                <Icons.search />
              </Button>
              <Button variant="ghost-icon" size="lg">
                <Icons.settings />
              </Button>
            </div>
          </div>
        </section>

        {/* Icons Section */}
        <section className="space-y-8">
          <div className="space-y-2">
            <Typography variant="h2" className="text-center">Icons</Typography>
            <Typography variant="p" className="text-muted-foreground text-center mt-2">
              Lucide React 기반의 아이콘 라이브러리
            </Typography>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Common Icons */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Common</Typography>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Icons.home className="size-6" />
                  <Typography variant="caption" className="text-center">home</Typography>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.user className="size-6" />
                  <Typography variant="caption" className="text-center">user</Typography>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.settings className="size-6" />
                  <Typography variant="caption" className="text-center">settings</Typography>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.search className="size-6" />
                  <Typography variant="caption" className="text-center">search</Typography>
                </div>
              </div>
            </div>

            {/* Action Icons */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Actions</Typography>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Icons.plus className="size-6" />
                  <Typography variant="caption" className="text-center">plus</Typography>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.minus className="size-6" />
                  <Typography variant="caption" className="text-center">minus</Typography>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.edit className="size-6" />
                  <Typography variant="caption" className="text-center">edit</Typography>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.trash className="size-6" />
                  <Typography variant="caption" className="text-center">trash</Typography>
                </div>
              </div>
            </div>

            {/* Status Icons */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Status</Typography>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Icons.check className="size-6 text-green-600" />
                  <Typography variant="caption" className="text-center">check</Typography>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.warning className="size-6 text-warning" />
                  <Typography variant="caption" className="text-center">warning</Typography>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.info className="size-6 text-primary" />
                  <Typography variant="caption" className="text-center">info</Typography>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.close className="size-6 text-error" />
                  <Typography variant="caption" className="text-center">close</Typography>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Social</Typography>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Icons.heart className="size-6 text-red-500" />
                  <Typography variant="caption" className="text-center">heart</Typography>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.star className="size-6 text-yellow-500" />
                  <Typography variant="caption" className="text-center">star</Typography>
                </div>
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Navigation</Typography>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Icons.menu className="size-6" />
                  <Typography variant="caption" className="text-center">menu</Typography>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icons.chevronDown className="size-6" />
                  <Typography variant="caption" className="text-center">chevron</Typography>
                </div>
              </div>
            </div>

            {/* File Icons */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Files</Typography>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-2">
                  <Icons.excel className="size-6 text-green-600" />
                  <Typography variant="caption" className="text-center">excel</Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="space-y-8">
          <div className="space-y-2">
            <Typography variant="h2" className="text-center">Inputs</Typography>
            <Typography variant="p" className="text-muted-foreground text-center mt-2">
              사용자 입력을 받는 다양한 인풋 필드
            </Typography>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Basic Inputs */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Basic Inputs</Typography>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Typography variant="small">Text Input</Typography>
                  <Input type="text" placeholder="텍스트를 입력하세요" />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">Email Input</Typography>
                  <Input type="email" placeholder="이메일을 입력하세요" />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">Password Input</Typography>
                  <Input type="password" placeholder="비밀번호를 입력하세요" />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">Number Input</Typography>
                  <Input type="number" placeholder="숫자를 입력하세요" />
                </div>
              </div>
            </div>

            {/* Input States */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Input States</Typography>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Typography variant="small">Normal</Typography>
                  <Input placeholder="일반 상태" />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">Focused (Preview)</Typography>
                  <Input placeholder="포커스 상태" className="ring-1 ring-ring" />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">Disabled</Typography>
                  <Input placeholder="비활성화 상태" disabled />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">With Value</Typography>
                  <Input defaultValue="입력된 텍스트" />
                </div>
              </div>
            </div>
          </div>

          {/* Input Sizes & Variants */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* File Input */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">File Input</Typography>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Typography variant="small">File Upload</Typography>
                  <Input type="file" />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">Multiple Files</Typography>
                  <Input type="file" multiple />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">Image Only</Typography>
                  <Input type="file" accept="image/*" />
                </div>
              </div>
            </div>

            {/* Special Inputs */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Special Inputs</Typography>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Typography variant="small">Date Input</Typography>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">Time Input</Typography>
                  <Input type="time" />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">URL Input</Typography>
                  <Input type="url" placeholder="https://example.com" />
                </div>
                <div className="space-y-2">
                  <Typography variant="small">Search Input</Typography>
                  <Input type="search" placeholder="검색어를 입력하세요" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing & Layout */}
        <section className="space-y-8">
          <div className="space-y-2">
            <Typography variant="h2" className="text-center">Spacing & Layout</Typography>
            <Typography variant="p" className="text-muted-foreground text-center mt-2">
              일관된 간격과 레이아웃 시스템
            </Typography>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Border Radius */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Border Radius</Typography>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="size-16 bg-muted-background rounded-sm"></div>
                  <Typography variant="small">rounded-sm</Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-16 bg-muted-background rounded-md"></div>
                  <Typography variant="small">rounded-md</Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-16 bg-muted-background rounded-lg"></div>
                  <Typography variant="small">rounded-lg</Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-16 bg-muted-background rounded-xl"></div>
                  <Typography variant="small">rounded-xl</Typography>
                </div>
              </div>
            </div>

            {/* Shadows */}
            <div className="space-y-4 rounded-lg border p-6">
              <Typography variant="h3" className="text-primary">Shadows</Typography>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="size-16 bg-background rounded-md shadow-sm border"></div>
                  <Typography variant="small">shadow-sm</Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-16 bg-background rounded-md shadow border"></div>
                  <Typography variant="small">shadow</Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-16 bg-background rounded-md shadow-md border"></div>
                  <Typography variant="small">shadow-md</Typography>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-16 bg-background rounded-md shadow-lg border"></div>
                  <Typography variant="small">shadow-lg</Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t pt-8">
          <Typography variant="p" className="text-center text-muted-foreground">
            디자인 시스템 v1.0 - ShadcnUI 기반으로 구축됨
          </Typography>
        </div>
      </div>
    </div>
  )
}

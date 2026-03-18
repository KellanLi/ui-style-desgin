import { Palette, Type, Square, MousePointer2 } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Input } from './components/ui/input';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                <span className="text-white font-semibold text-sm">CV</span>
              </div>
              <h1 className="text-xl font-semibold text-foreground">简历编辑器 - 设计系统</h1>
            </div>
            <Button>开始使用</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-8 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm mb-4">
            <Palette className="w-4 h-4" />
            设计系统展示
          </div>
          <h1 className="text-4xl font-semibold text-foreground mb-4">在线简历编辑系统</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            现代简洁的设计风格，结合了Notion的简洁性与Canva的专业性。采用蓝紫色系渐变，打造科技感与专业性兼具的视觉体验。
          </p>
        </div>

        {/* Color System */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Palette className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">配色系统</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Primary Colors */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">主色调</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#6366f1] shadow-lg"></div>
                  <div>
                    <div className="font-medium">Primary Blue</div>
                    <div className="text-sm text-muted-foreground">#6366f1</div>
                    <div className="text-xs text-muted-foreground">主要按钮、链接、强调</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] shadow-lg"></div>
                  <div>
                    <div className="font-medium">Gradient</div>
                    <div className="text-sm text-muted-foreground">#6366f1 → #8b5cf6</div>
                    <div className="text-xs text-muted-foreground">品牌渐变、特殊强调</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Neutral Colors */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">中性色</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#1a1d2e] shadow-lg"></div>
                  <div>
                    <div className="font-medium">Foreground</div>
                    <div className="text-sm text-muted-foreground">#1a1d2e</div>
                    <div className="text-xs text-muted-foreground">主要文本</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#64748b] shadow-lg"></div>
                  <div>
                    <div className="font-medium">Muted</div>
                    <div className="text-sm text-muted-foreground">#64748b</div>
                    <div className="text-xs text-muted-foreground">次要文本、说明</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Background Colors */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">背景色</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#fafbfc] border-2 border-border shadow-sm"></div>
                  <div>
                    <div className="font-medium">Background</div>
                    <div className="text-sm text-muted-foreground">#fafbfc</div>
                    <div className="text-xs text-muted-foreground">页面背景</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white border-2 border-border shadow-sm"></div>
                  <div>
                    <div className="font-medium">Card</div>
                    <div className="text-sm text-muted-foreground">#ffffff</div>
                    <div className="text-xs text-muted-foreground">卡片、面板</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Accent Colors */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">辅助色</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#eef2ff] shadow-sm"></div>
                  <div>
                    <div className="font-medium">Accent</div>
                    <div className="text-sm text-muted-foreground">#eef2ff</div>
                    <div className="text-xs text-muted-foreground">高亮背景、标签</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#f1f5f9] shadow-sm"></div>
                  <div>
                    <div className="font-medium">Secondary</div>
                    <div className="text-sm text-muted-foreground">#f1f5f9</div>
                    <div className="text-xs text-muted-foreground">次要按钮、区域</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Type className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">字体系统</h2>
          </div>

          <Card className="p-6">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl mb-2">Heading 1 - 大标题</h1>
                <p className="text-sm text-muted-foreground">Font-size: 36px, Weight: 500, 用于页面主标题</p>
              </div>
              <div>
                <h2 className="text-3xl mb-2">Heading 2 - 二级标题</h2>
                <p className="text-sm text-muted-foreground">Font-size: 30px, Weight: 500, 用于区块标题</p>
              </div>
              <div>
                <h3 className="text-2xl mb-2">Heading 3 - 三级标题</h3>
                <p className="text-sm text-muted-foreground">Font-size: 24px, Weight: 500, 用于卡片标题</p>
              </div>
              <div>
                <h4 className="text-xl mb-2">Heading 4 - 四级标题</h4>
                <p className="text-sm text-muted-foreground">Font-size: 20px, Weight: 500, 用于小节标题</p>
              </div>
              <div>
                <p className="text-base mb-2">Body - 正文文本内容，清晰易读，适合长时间编辑使用。保持良好的行高和字间距。</p>
                <p className="text-sm text-muted-foreground">Font-size: 16px, Weight: 400, 用于正文内容</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Small - 辅助文本、说明文字、时间戳等次要信息</p>
                <p className="text-xs text-muted-foreground">Font-size: 14px, Weight: 400, 用于辅助信息</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <MousePointer2 className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">按钮系统</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Primary 按钮</h3>
              <div className="space-y-4">
                <div>
                  <Button className="w-full">默认按钮</Button>
                  <p className="text-sm text-muted-foreground mt-2">主要操作：创建、保存、提交等</p>
                </div>
                <div>
                  <Button className="w-full" size="lg">大尺寸按钮</Button>
                  <p className="text-sm text-muted-foreground mt-2">重要的主操作</p>
                </div>
                <div>
                  <Button className="w-full" size="sm">小尺寸按钮</Button>
                  <p className="text-sm text-muted-foreground mt-2">紧凑空间使用</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Secondary 按钮</h3>
              <div className="space-y-4">
                <div>
                  <Button variant="secondary" className="w-full">次要按钮</Button>
                  <p className="text-sm text-muted-foreground mt-2">次要操作：取消、返回等</p>
                </div>
                <div>
                  <Button variant="outline" className="w-full">线框按钮</Button>
                  <p className="text-sm text-muted-foreground mt-2">辅助操作</p>
                </div>
                <div>
                  <Button variant="ghost" className="w-full">幽灵按钮</Button>
                  <p className="text-sm text-muted-foreground mt-2">最轻量的操作</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Icon 按钮</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Button size="icon"><Palette className="w-4 h-4" /></Button>
                  <Button size="icon" variant="secondary"><Type className="w-4 h-4" /></Button>
                  <Button size="icon" variant="outline"><Square className="w-4 h-4" /></Button>
                  <Button size="icon" variant="ghost"><MousePointer2 className="w-4 h-4" /></Button>
                </div>
                <p className="text-sm text-muted-foreground">工具栏图标按钮</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">状态按钮</h3>
              <div className="space-y-4">
                <div>
                  <Button disabled className="w-full">禁用状态</Button>
                  <p className="text-sm text-muted-foreground mt-2">不可操作状态</p>
                </div>
                <div>
                  <Button variant="destructive" className="w-full">删除按钮</Button>
                  <p className="text-sm text-muted-foreground mt-2">危险操作：删除、清空</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Square className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">卡片系统</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Card */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-3">基础卡片</h3>
              <p className="text-sm text-muted-foreground mb-4">
                白色背景，圆角12px，柔和阴影。适合展示独立的内容块。
              </p>
              <div className="text-xs text-muted-foreground">
                Border-radius: 12px<br />
                Background: #ffffff<br />
                Shadow: subtle
              </div>
            </Card>

            {/* Hover Card */}
            <Card className="p-6 transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer">
              <h3 className="text-lg font-semibold mb-3">悬停效果卡片</h3>
              <p className="text-sm text-muted-foreground mb-4">
                鼠标悬停时有微妙的提升和阴影效果，增强交互反馈。
              </p>
              <div className="text-xs text-muted-foreground">
                Hover: scale(1.02)<br />
                Shadow: enhanced<br />
                Transition: smooth
              </div>
            </Card>

            {/* Accent Card */}
            <Card className="p-6 bg-gradient-to-br from-accent to-white border-accent-foreground/20">
              <h3 className="text-lg font-semibold mb-3 text-accent-foreground">强调卡片</h3>
              <p className="text-sm text-muted-foreground mb-4">
                使用渐变背景突出重要信息或特殊内容区域。
              </p>
              <div className="text-xs text-muted-foreground">
                Background: gradient<br />
                Border: accent<br />
                Use: highlights
              </div>
            </Card>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">表单元素</h2>
          
          <Card className="p-6 max-w-2xl">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">输入框</label>
                <Input placeholder="请输入内容..." />
                <p className="text-xs text-muted-foreground mt-2">清晰的边框，聚焦时高亮</p>
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">大尺寸输入框</label>
                <Input placeholder="姓名" className="h-12 text-lg" />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">禁用状态</label>
                <Input placeholder="禁用输入" disabled />
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block mb-2 text-sm font-medium">电话</label>
                  <Input placeholder="手机号" />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-sm font-medium">邮箱</label>
                  <Input placeholder="email@example.com" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Spacing & Layout */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">间距与布局</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">间距系统</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>XS</span>
                  <span className="text-muted-foreground">4px / 0.25rem</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>SM</span>
                  <span className="text-muted-foreground">8px / 0.5rem</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>MD</span>
                  <span className="text-muted-foreground">16px / 1rem</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>LG</span>
                  <span className="text-muted-foreground">24px / 1.5rem</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>XL</span>
                  <span className="text-muted-foreground">32px / 2rem</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>2XL</span>
                  <span className="text-muted-foreground">48px / 3rem</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">圆角系统</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>Small</span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-sm"></div>
                    <span className="text-muted-foreground">8px</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>Medium</span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-md"></div>
                    <span className="text-muted-foreground">10px</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>Large</span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg"></div>
                    <span className="text-muted-foreground">12px</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>XL</span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-xl"></div>
                    <span className="text-muted-foreground">16px</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">设计原则</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">简洁优雅</h3>
              <p className="text-sm text-muted-foreground">
                去除不必要的装饰，保持界面清爽。使用充足的留白，让内容呼吸。
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4">
                <Type className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">清晰易读</h3>
              <p className="text-sm text-muted-foreground">
                合理的字号、行高和对比度，确保长时间编辑不疲劳。
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4">
                <MousePointer2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">专业高效</h3>
              <p className="text-sm text-muted-foreground">
                快速响应的交互反馈，直观的操作流程，提升编辑效率。
              </p>
            </Card>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="text-center text-sm text-muted-foreground">
            简历编辑器设计系统 - 现代、简洁、专业
          </p>
        </div>
      </footer>
    </div>
  );
}

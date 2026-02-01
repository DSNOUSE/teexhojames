# Reusable Layout Components Usage Guide

## 📦 Available Components

### 1. Container
```jsx
import { Container } from '@/components';

<Container className="custom-class">
  <p>Your content here</p>
</Container>
```

### 2. Section
```jsx
import { Section } from '@/components';

<Section bg="gray-50" padding="lg">
  <h2>Section Title</h2>
  <p>Section content</p>
</Section>
```

### 3. Card
```jsx
import { Card } from '@/components';

<Card hover shadow="md">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### 4. Button
```jsx
import { Button } from '@/components';

// As link
<Button href="/contact" variant="primary" size="lg">
  Contact Us
</Button>

// As button
<Button variant="secondary" onClick={handleClick}>
  Click Me
</Button>
```

### 5. Grid
```jsx
import { Grid } from '@/components';

<Grid cols={3} gap="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### 6. SectionHeader
```jsx
import { SectionHeader } from '@/components';

<SectionHeader 
  title="Our Services"
  description="We offer comprehensive solutions for your needs"
  centered={true}
/>
```

## 🎯 Example: Refactored Services Section

```jsx
import { Section, SectionHeader, Grid, Card, Button } from '@/components';

export function Services() {
  return (
    <>
      {/* Introduction Section */}
      <Section bg="custom" padding="lg" className="services-intro" style={{backgroundColor: '#153937'}}>
        <Grid cols={2} gap="xl" className="items-center">
          <div className="relative">
            <Image
              src="/images/gears.jpg"
              alt="Corporate Environment"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="text-center md:text-left">
            <SectionHeader 
              title="Empowering Your Journey"
              description="From classroom to boardroom, we bridge the gap between ambition and achievement"
              centered={false}
              className="mb-8"
            />
            
            <Button href="/contact" variant="primary-white" size="lg">
              Start Your Journey Today
            </Button>
          </div>
        </Grid>
      </Section>

      {/* Main Services Section */}
      <Section bg="gray-50" padding="lg">
        <SectionHeader 
          title="Our Solutions"
          description="Comprehensive services designed to help students achieve their educational dreams"
        />

        <Grid cols={2} gap="xl">
          <Card hover shadow="md">
            {/* Education Consulting Content */}
          </Card>
          
          <Card hover shadow="md">
            {/* Digital Solutions Content */}
          </Card>
        </Grid>
      </Section>
    </>
  );
}
```

## 🎨 Component Props Reference

### Container
- `className?: string` - Additional CSS classes

### Section
- `bg?: 'white' | 'gray-50' | 'gray-100'` - Background color
- `padding?: 'sm' | 'md' | 'lg' | 'xl'` - Vertical padding
- `className?: string` - Additional CSS classes

### Card
- `hover?: boolean` - Add hover effect
- `border?: boolean` - Show border
- `shadow?: 'sm' | 'md' | 'lg' | 'none'` - Shadow intensity
- `className?: string` - Additional CSS classes

### Button
- `variant?: 'primary' | 'secondary' | 'primary-white'` - Button style
- `size?: 'sm' | 'md' | 'lg'` - Button size
- `href?: string` - If provided, renders as Link
- `onClick?: () => void` - Click handler
- `disabled?: boolean` - Disable button
- `className?: string` - Additional CSS classes

### Grid
- `cols?: 1 | 2 | 3 | 4 | 6` - Number of columns
- `gap?: 'sm' | 'md' | 'lg' | 'xl'` - Grid gap size
- `className?: string` - Additional CSS classes

### SectionHeader
- `title: string` - Section title
- `description?: string` - Section description
- `centered?: boolean` - Center align text
- `className?: string` - Additional CSS classes

## 🚀 Benefits

1. **Consistency**: Uniform styling across all sections
2. **Maintainability**: Single source of truth for common patterns
3. **Development Speed**: Faster development with pre-built components
4. **TypeScript Support**: Full type safety
5. **Responsive**: Built-in responsive design
6. **Customizable**: Flexible props for customization

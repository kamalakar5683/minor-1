import { TrendingUp, Clock, Target, Zap, BarChart3, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ModelPerformance = () => {
  const metrics = [
    {
      label: 'Training Accuracy',
      value: 98.3,
      icon: Target,
      color: 'text-success'
    },
    {
      label: 'Validation Accuracy',
      value: 96.7,
      icon: CheckCircle,
      color: 'text-primary'
    },
    {
      label: 'Inference Speed',
      value: 85,
      unit: 'ms',
      icon: Zap,
      color: 'text-warning'
    },
    {
      label: 'Model Confidence',
      value: 94.1,
      icon: TrendingUp,
      color: 'text-primary-light'
    }
  ];

  const trainingDetails = [
    { label: 'Training Epochs', value: '5' },
    { label: 'Loss Function', value: 'Binary Cross-Entropy' },
    { label: 'Optimizer', value: 'Adam' },
    { label: 'Learning Rate', value: '0.001' },
    { label: 'Batch Size', value: '32' },
    { label: 'Dropout Rate', value: '0.5' }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Model <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Performance</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive training insights and real-time performance metrics from our EfficientNetB7 model
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className={`w-8 h-8 ${metric.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">
                      {metric.value}
                      {metric.unit ? metric.unit : '%'}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                  <Progress 
                    value={metric.unit ? Math.min(metric.value / 2, 100) : metric.value} 
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Training Insights */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                <span>Training Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Model trained for <span className="font-semibold text-primary">5 epochs</span> using chest X-ray 
                  training/validation sets. Used <span className="font-semibold text-primary">binary cross-entropy loss</span> with 
                  <span className="font-semibold text-primary"> Adam optimizer</span>. Real-time accuracy and validation 
                  plots shown during training. Optimized with dropout and frozen base layers.
                </p>

                {/* Training Parameters */}
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <h4 className="font-semibold text-foreground mb-3">Training Configuration</h4>
                  {trainingDetails.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{detail.label}:</span>
                      <span className="text-sm font-medium text-foreground">{detail.value}</span>
                    </div>
                  ))}
                </div>

                {/* Performance Indicators */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm text-foreground">Data augmentation applied</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm text-foreground">Dropout regularization enabled</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm text-foreground">Base layers frozen for transfer learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm text-foreground">Early stopping implemented</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Chart Placeholder */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span>Training Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Chart Placeholder */}
                <div className="bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-lg p-8 h-64 flex items-center justify-center border border-primary/10">
                  <div className="text-center space-y-4">
                    <BarChart3 className="w-16 h-16 text-primary mx-auto opacity-50" />
                    <div>
                      <p className="text-foreground font-medium">Training/Validation Accuracy</p>
                      <p className="text-sm text-muted-foreground">Real-time matplotlib visualization</p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-success/10 rounded-lg p-4 text-center border border-success/20">
                    <div className="text-2xl font-bold text-success mb-1">98.3%</div>
                    <div className="text-xs text-muted-foreground">Final Training Accuracy</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4 text-center border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">96.7%</div>
                    <div className="text-xs text-muted-foreground">Validation Accuracy</div>
                  </div>
                </div>

                {/* Additional Metrics */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Inference Speed:</span>
                    <span className="font-medium text-foreground">&lt; 2 seconds</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Confidence Interval:</span>
                    <span className="font-medium text-foreground">85-99%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Model Size:</span>
                    <span className="font-medium text-foreground">256 MB</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Summary */}
        <div className="mt-16 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-2xl p-8 border border-primary/10">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Clinical Performance Summary</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our EfficientNetB7 model demonstrates exceptional performance with clinical-grade accuracy, 
              making it suitable for real-world radiological assistance and emergency triage scenarios.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
                <div className="text-sm text-muted-foreground">Average Processing Time</div>
              </div>
              
              <div className="text-center">
                <Target className="w-12 h-12 text-success mx-auto mb-3" />
                <div className="text-3xl font-bold text-success mb-2">98.3%</div>
                <div className="text-sm text-muted-foreground">Training Accuracy</div>
              </div>
              
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-warning mx-auto mb-3" />
                <div className="text-3xl font-bold text-warning mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Images Processed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelPerformance;
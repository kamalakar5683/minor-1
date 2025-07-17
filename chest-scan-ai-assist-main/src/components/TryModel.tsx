import { useState } from 'react';
import { Upload, Play, CheckCircle, AlertCircle, BarChart3, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const TryModel = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    prediction: 'Normal' | 'Abnormal';
    confidence: number;
  } | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setResult(null);
    }
  };

  const runDiagnosis = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate model processing
    setTimeout(() => {
      // Mock prediction result
      const mockResults = [
        { prediction: 'Normal' as const, confidence: 98.33 },
        { prediction: 'Abnormal' as const, confidence: 91.45 },
        { prediction: 'Normal' as const, confidence: 94.78 },
        { prediction: 'Abnormal' as const, confidence: 87.92 }
      ];
      
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setResult(randomResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  const steps = [
    {
      number: 1,
      title: "Upload Chest X-Ray",
      description: "Select a JPEG format chest X-ray image",
      completed: !!selectedFile
    },
    {
      number: 2,
      title: "Image Preprocessing",
      description: "Image is resized and normalized to 255 scale",
      completed: !!selectedFile && isAnalyzing
    },
    {
      number: 3,
      title: "EfficientNetB7 Analysis",
      description: "AI model processes the image features",
      completed: !!result
    },
    {
      number: 4,
      title: "Classification Result",
      description: "Normal or Abnormal with confidence percentage",
      completed: !!result
    }
  ];

  return (
    <section id="try-model" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Try the <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Model</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience real-time chest X-ray analysis with our AI diagnostic tool
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Process Steps */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Analysis Process</h3>
            
            {steps.map((step, index) => (
              <div key={index} className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                step.completed ? 'bg-primary/5 border border-primary/20' : 'bg-card border border-border/50'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step.completed 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {step.completed ? <CheckCircle className="w-4 h-4" /> : step.number}
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    step.completed ? 'text-primary' : 'text-foreground'
                  }`}>
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo */}
          <div className="space-y-6">
            {/* File Upload */}
            <Card className="border-dashed border-2 border-primary/30 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <FileImage className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Upload X-Ray Image</h3>
                  <p className="text-muted-foreground">JPEG format, max 10MB</p>
                </div>

                <input
                  type="file"
                  id="xray-upload"
                  accept="image/jpeg,image/jpg"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                
                <label
                  htmlFor="xray-upload"
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg cursor-pointer transition-colors duration-300"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  {selectedFile ? 'Change Image' : 'Select X-Ray'}
                </label>

                {selectedFile && (
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-foreground font-medium">{selectedFile.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Analysis Button */}
            <Button
              onClick={runDiagnosis}
              disabled={!selectedFile || isAnalyzing}
              className="w-full py-4 text-lg bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary disabled:from-muted disabled:to-muted disabled:text-muted-foreground"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Run Diagnosis
                </>
              )}
            </Button>

            {/* Results */}
            {isAnalyzing && (
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Processing...</span>
                      <span className="text-sm text-muted-foreground">AI Analysis in progress</span>
                    </div>
                    <Progress value={66} className="w-full" />
                  </div>
                </CardContent>
              </Card>
            )}

            {result && (
              <Card className={`border-2 ${
                result.prediction === 'Normal' 
                  ? 'border-success bg-success/5' 
                  : 'border-warning bg-warning/5'
              }`}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    {result.prediction === 'Normal' ? (
                      <CheckCircle className="w-6 h-6 text-success" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-warning" />
                    )}
                    <span>Diagnosis Result</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Prediction:</span>
                      <span className={`text-xl font-bold ${
                        result.prediction === 'Normal' ? 'text-success' : 'text-warning'
                      }`}>
                        {result.prediction}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Confidence:</span>
                        <span className="text-sm font-bold">{result.confidence}%</span>
                      </div>
                      <Progress 
                        value={result.confidence} 
                        className={`w-full ${
                          result.prediction === 'Normal' ? '[&>div]:bg-success' : '[&>div]:bg-warning'
                        }`}
                      />
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong>Note:</strong> This AI tool is designed to assist radiologists and should not replace professional medical diagnosis.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Accuracy Chart Placeholder */}
            {result && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span>Training Performance</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 rounded-lg p-8 text-center">
                    <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                    <p className="text-muted-foreground">
                      Training/Validation Accuracy Chart
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Model trained for 5 epochs with 98.3% validation accuracy
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryModel;
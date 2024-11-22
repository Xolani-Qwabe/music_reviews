export class Ad {
    adId: string;
    content: string;
    targetUrl: string;
    impressions: number;
  
    constructor(adId: string, content: string, targetUrl: string) {
      this.adId = adId;
      this.content = content;
      this.targetUrl = targetUrl;
      this.impressions = 0;
    }
  
    incrementImpressions(): void {
      this.impressions++;
    }
  }
  
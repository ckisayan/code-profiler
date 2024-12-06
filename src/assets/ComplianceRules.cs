using SupplyChain.Entities.Configuration;
using SupplyChain.Entities.VendorMaintenance;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace SupplyChain.BusinessLogic
{
    public class ComplianceRules
    {
        public NewVendorRuleViolationResponse RunNewVendorRules(RunNewVendorComplianceRuleRequest newVendorDetails)
        {

            NewVendorRuleViolationResponse ruleResponse = new();
            Rule rule = ApplyPricingRules(newVendorDetails.VendorDetails);

            if (!string.IsNullOrEmpty(rule.RuleId))
            {
                ruleResponse.Rules.Add(rule);
            }
            List<Rule> rules = CheckStateCompliance(newVendorDetails.VendorDetails);
            if (rules is not null && rules.Count > 0)
            {
                foreach (Rule r in rules)
                {
                    ruleResponse.Rules.Add(r);
                }
                
            }

            return ruleResponse;
            
        }
        public static Rule ApplyPricingRules(VendorDetailsModel vendorDetails)
        {
            bool ruleViolated = false;

            switch (vendorDetails.VendorLicenseType)
            {
                case VendorType.Manufacturer:
                    if (vendorDetails.PricingDiscountType != PricingRuleType.TieredPricing)
                    {
                        ruleViolated = true;

                    }
                    break;
                case VendorType.Wholesaler:
                    if (vendorDetails.PricingDiscountType != PricingRuleType.MinimumOrderQuantity || vendorDetails.PricingDiscountType != PricingRuleType.ContractualPricing)
                    {
                        ruleViolated = true;
                    }

                    break;
                case VendorType.ValueAddedReseller:
                    if (vendorDetails.PricingDiscountType != PricingRuleType.DynamicPricing || vendorDetails.PricingDiscountType != PricingRuleType.SpecialPricingForLoyalty)
                    {
                        ruleViolated = true;
                    }
                        break;
                default:
                    Console.WriteLine("Standard pricing rules apply.");
                    break;
            }

            Rule rule = new();
            
            if (ruleViolated)
            {
                rule.RuleId = "R012333";
                rule.RuleDesc = "Vendor Type Pricing Rule mistmatch.";
            }
            return rule;
        }
        public List<Rule> CheckStateCompliance(VendorDetailsModel vendorDetails)
        {
            List<Rule> rules = new();
            switch (vendorDetails.VendorAddressState)
            {
                case "California":
                    // CCPA compliance check
                    if (vendorDetails.IsCCPACompliant && vendorDetails.DataProcessingScope == DataProcessingScope.PersonalData)
                    {
                        Console.WriteLine("Vendor is CCPA compliant and processes personal data.");
                    }
                    else
                    {
                        Console.WriteLine("Vendor is not CCPA compliant or does not process personal data.");
                    }

                    // AB5 worker classification compliance check
                    if (vendorDetails.IsAB5Compliant && vendorDetails.WorkerClassification == WorkerClassification.IndependentContractor)
                    {
                        Console.WriteLine("Vendor is AB5 compliant and correctly classifies workers as independent contractors.");
                    }
                    else
                    {
                        Console.WriteLine("Vendor is not AB5 compliant or has incorrect worker classification.");
                    }

                    // Sales tax nexus compliance check
                    if (vendorDetails.HasSalesTaxNexus && vendorDetails.SalesTaxNexusStates.Contains("California"))
                    {
                        Console.WriteLine("Vendor has a sales tax nexus in California.");
                    }
                    else
                    {
                        Console.WriteLine("Vendor does not have a sales tax nexus in California.");
                    }
                    break;

                case "New York":
                    // Example of state-specific compliance for New York
                    if (vendorDetails.HasSalesTaxNexus && vendorDetails.SalesTaxNexusStates.Contains("New York"))
                    {
                        Console.WriteLine("Vendor has a sales tax nexus in New York.");
                    }
                    else
                    {
                        Console.WriteLine("Vendor does not have a sales tax nexus in New York.");
                    }
                    break;

                case "Texas":
                    // Example of state-specific compliance for Texas
                    if (vendorDetails.HasSalesTaxNexus && vendorDetails.SalesTaxNexusStates.Contains("Texas"))
                    {
                        Console.WriteLine("Vendor has a sales tax nexus in Texas.");
                    }
                    else
                    {
                        Console.WriteLine("Vendor does not have a sales tax nexus in Texas.");
                    }
                    break;

                default:
                    Console.WriteLine($"No specific compliance checks required for {vendorDetails.VendorAddressState}.");
                    break;
            }
            return rules;
        }
    }
}
